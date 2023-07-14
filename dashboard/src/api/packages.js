import client from './client';

export const fetchAllPackages = async () => {
  try {
    const { data } = await client.get('/package/all');
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};
export const getAllPackagesCount = async () => {
  try {
    const { data } = await client.get('/package/package-count');
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};

export const deleteSinglePackage = async (id) => {
  try {
    const { data } = await client.delete(`package/delete-package/${id}`);
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};

export const getSinglePackage = async (id) => {
  try {
    const { data } = await client.get(`package/single/${id}`);
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};
