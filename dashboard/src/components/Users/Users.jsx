import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import { deleteUserApi, getAllUsers } from '../../api/users';
import StatusBadge from '../utils/StatusBadge';
import EditButton from '../utils/EditButton';
import DeleteButton from '../utils/DeleteButton';
import { Link, useNavigate } from 'react-router-dom';
import AddButton from '../utils/AddButton';

const Users = () => {
  const [Users, setUsers] = useState([]);
  const [renderUsers, setRenderUser] = useState(false);

  const fetchUsers = async () => {
    const Users = await getAllUsers();
    setUsers(Users);
  };

  const deleteUser = async (userId) => {
    const deleted = await deleteUserApi(userId);
    console.log(deleted);

    setRenderUser((renderUsers) => !renderUsers);
  };

  useEffect(() => {
    fetchUsers();
  }, [renderUsers]);

  return (
    <ContentsBox>
      <DashHead>Users</DashHead>
      <div className='table-wrap'>
        <table className='table'>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Role</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {Users.length > 0 ? (
              Users.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.isVerified ? (
                        <StatusBadge status='green'>Verified</StatusBadge>
                      ) : (
                        <StatusBadge status='red'>Not verified</StatusBadge>
                      )}
                    </td>
                    <td>{user.role}</td>
                    <td className='flex gap-2'>
                      <Link to={`/edit-user/${user.id}`}>
                        <EditButton />
                      </Link>

                      <Popup
                        trigger={
                          <button className='flex'>
                            <DeleteButton />
                          </button>
                        }
                        position='bottom center'
                      >
                        <div className='p-2'>
                          <h5 className='text-center font-bold mb-3'>
                            Are you sure you want to delete the user?
                          </h5>
                          <div className='flex gap-2 text-sm justify-center mb-2'>
                            <button
                              className='bg-statusRed text-white py-1 px-2 rounded'
                              onClick={() => {
                                deleteUser(user.id);
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </Popup>
                    </td>
                  </tr>
                );
              })
            ) : (
              <p className='text-center p-5 w-full'>No users to display</p>
            )}
          </tbody>
        </table>
      </div>
      <AddButton to='/add-user'>Add New User</AddButton>
    </ContentsBox>
  );
};

export default Users;
