import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import { deleteUserApi, getAllUsers } from '../../api/users';
import StatusBadge from '../utils/StatusBadge';
import EditButton from '../utils/EditButton';
import DeleteButton from '../utils/DeleteButton';
import ViewButton from '../utils/ViewButton';
import { Link, useNavigate } from 'react-router-dom';
import AddButton from '../utils/AddButton';
import { deleteSinglePackage, fetchAllPackages } from '../../api/packages';

const Users = () => {
  const [packages, setPackages] = useState([]);

  const [renderPackage, setRenderPackage] = useState(false);

  const deletePackage = async (packageId) => {
    const deleted = await deleteSinglePackage(packageId);
    console.log(deleted);

    setRenderPackage((renderPackage) => !renderPackage);
  };

  const getAllPackages = async () => {
    const result = await fetchAllPackages();
    setPackages(result);
  };

  useEffect(() => {
    getAllPackages();
  }, [renderPackage]);

  return (
    <ContentsBox>
      <DashHead>Packages</DashHead>
      <div className='table-wrap'>
        <table className='table'>
          <thead>
            <th>Id</th>
            <th>Title</th>
            <th>TitleDesc</th>
            <th>Days</th>
            <th>Price</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {packages.length > 0 ? (
              packages.map((packageItem) => {
                return (
                  <tr key={packageItem.id}>
                    <td>{packageItem.id}</td>
                    <td>{packageItem.title}</td>
                    <td>{packageItem.titleDesc}</td>
                    <td>{packageItem.days || 'N/A'}</td>
                    <td>{packageItem.price}</td>
                    <td>
                      <div className='flex gap-2'>
                        <Link to={`/package-details/${packageItem.id}`}>
                          <ViewButton />
                        </Link>
                        <Link to={`/edit-package/${packageItem.id}`}>
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
                              Are you sure you want to delete the Package?
                            </h5>
                            <div className='flex gap-2 text-sm justify-center mb-2'>
                              <button
                                className='bg-statusRed text-white py-1 px-2 rounded'
                                onClick={() => {
                                  deletePackage(packageItem.id);
                                }}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </Popup>
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6}>
                  <div className='m-auto text-center p-5 text-black-60'>
                    No Packages to display
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddButton to='/add-package'>Add New Package</AddButton>
    </ContentsBox>
  );
};

export default Users;
