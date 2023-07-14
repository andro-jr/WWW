const { createBooking } = require('../utils/booking');
const db = require('../db/index');
const { sendError } = require('../utils/helper');
const { generateMailTransporter } = require('../utils/mail');
const Booking = db.booking;

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// @desc Create new Booking
// @route /api/package/create
// @access PRIVATE
const stripePaymentApi = async (req, res) => {
  const { userId, useremail, packageId, packagename, price, departureDate } =
    req.body;

  const customer = await stripe.customers.create({
    metadata: {
      userId: userId,
      useremail: useremail,
      packageId: packageId,
      packagename: packagename,
      price: price,
      departureDate: departureDate,
    },
  });

  const { product } = req.body;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: packagename,
          },
          unit_amount: price * 100,
        },
        quantity: 1,
      },
    ],
    customer: customer.id,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });
  res.json({ url: session.url });
};

// Stripe webhook

let endpointSecret;

endpointSecret =
  'whsec_407ed3de442cbfbb835a2c28b91d9ab3a345636c0c9852ada6dcb16f3bfb3e4e';

const stripeWebHook = (request, response) => {
  const sig = request.headers['stripe-signature'];

  let data;
  let eventType;

  if (endpointSecret) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
      console.log('Webhook verified');
    } catch (err) {
      console.log(`Webhook Error: ${err.message}`);
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    data = event.data.object;
    eventType = event.type;
  } else {
    data = request.body.data.object;
    eventType = request.body.type;
  }

  console.log('Route hit');

  // Handle the event
  if (eventType === 'checkout.session.completed') {
    stripe.customers
      .retrieve(data.customer)
      .then((customer) => {
        console.log(customer);
        console.log('data', data);
        createBooking(customer, data);
      })
      .catch((err) => console.log(err.message));
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
};

const getAllBookings = async (req, res) => {
  const bookings = await Booking.findAll();

  if (!bookings) return sendError(res, 'Bookings not found', 404);

  res.json(bookings);
};

const getAllBookingsCount = async (req, res) => {
  const bookings = await Booking.findAll();

  if (!bookings) return sendError(res, 'Bookings not found', 404);

  res.json(bookings.length);
};

const getPendingBookings = async (req, res) => {
  const pendingBookings = await Booking.findAll({ where: { approved: false } });

  if (!pendingBookings) return sendError(res, 'Bookings not found', 404);

  res.json(pendingBookings);
};

const getTotalSales = async (req, res) => {
  const bookings = await Booking.findAll();

  if (!bookings) return sendError(res, 'Bookings not found', 404);

  let sales = [];
  bookings.map((booking) => {
    sales.push(booking.total);
  });

  const totalSales = sales.reduce((acc, current) => acc + current, 0);

  console.log(totalSales);

  res.json(totalSales);
};

const approveBooking = async (req, res) => {
  const { id } = req.params;

  const booking = await Booking.findByPk(id);

  if (!booking) return sendError(res, 'Booking not Found', 404);

  if (booking.approved)
    return sendError(res, 'Booking is already approved', 404);

  booking.approved = true;
  const savedBooking = await booking.save();

  if (!savedBooking) return sendError(res, 'Failed to update');

  let transporter = generateMailTransporter();

  transporter.sendMail({
    from: 'booking@www.com',
    to: booking.useremail,
    subject: 'Booking has been Approved',
    html: `<p>Your Booking for ${booking.packagename} has been approved.</p>`,
  });

  res.send({ message: 'Booking Approved', status: 200 });
};

module.exports = {
  stripePaymentApi,
  stripeWebHook,
  getAllBookings,
  approveBooking,
  getPendingBookings,
  getAllBookingsCount,
  getTotalSales,
};
