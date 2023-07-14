import client from './client';
// /bookings/all
export const getAllBookings = async () => {
  try {
    const { data } = await client.get('/stripe/bookings/all');
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};
export const getAllBookingCount = async () => {
  try {
    const { data } = await client.get('/stripe/bookings/count');
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};

export const getTotalSales = async () => {
  try {
    const { data } = await client.get('/stripe/bookings/sales');
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};

export const getPendingBookings = async () => {
  try {
    const { data } = await client.get('/stripe/bookings/pending');
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};

export const approveBookingAPI = async (id) => {
  try {
    const { data } = await client.put(`/stripe/bookings/approve/${id}`);
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};
