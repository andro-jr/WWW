const db = require('../db/index');
const Booking = db.booking;

exports.createBooking = async (customer, data) => {
  try {
    const { userId, useremail, packageId, packagename, price, departureDate } =
      customer.metadata;

    console.log(data.payment_intent);

    const newBooking = await Booking.create({
      userId,
      useremail,
      packageId,
      packagename,
      total: data.amount_total / 100,
      departureDate,
      payment_intent: data.payment_intent,
    });
  } catch (err) {
    console.log(err);
  }
};
