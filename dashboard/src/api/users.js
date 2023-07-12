import client from './client';

export const getAllUsers = async () => {
  try {
    const { data } = await client.get('/user/all');
    // console.log(data);
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};

export const deleteUserApi = async (userId) => {
  try {
    const { data } = await client.delete(`/user/delete-user/${userId}`);
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};

export const getSingleUser = async (id) => {
  try {
    const { data } = await client.get(`/user/single-user/${id}`);
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};

export const addUser = async (userInfo) => {
  try {
    const { data } = await client.post('/user/admin-user-add', userInfo);
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};

export const updateUser = async (userInfo) => {
  try {
    const { data } = await client.put('/user/update-user', userInfo);
    return data;
  } catch (err) {
    const { response } = err;
    if (response?.data) return response.data;

    return { error: err.message || err };
  }
};
