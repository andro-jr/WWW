import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import FormInput from '../utils/FormInput';
import Checkbox from '../utils/Checkbox';
import RadioButton from '../utils/RadioButton';
import SaveButton from '../utils/SaveButton';
import CancelButton from '../utils/CancelButton';
import { getSingleUser, updateUser } from '../../api/users';

const validateUserInfo = (userInfo) => {
  const { name, email, password } = userInfo;
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!name.trim()) return { ok: false, error: 'Name is missing' };
  if (!email.trim()) return { ok: false, error: 'Email is missing' };
  if (!isValidEmail.test(email))
    return { ok: false, error: 'Email is invalid' };
  if (!password.trim()) return { ok: false, error: 'New Password is missing' };
  if (password.length < 8)
    return { ok: false, error: 'Password must be atlest 8 characters' };

  return { ok: true };
};

const EditUser = () => {
  const { id } = useParams();
  const [userData, setuserData] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const fetchSingleUser = async (id) => {
    const result = await getSingleUser(id);
    setuserData(result);
    setUserInfo({
      name: result.name,
      email: result.email,
      password: '',
    });
    setRole(result.role);
  };

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  useEffect(() => {
    fetchSingleUser(id);
  }, []);

  console.log(userInfo, role);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ok, error } = validateUserInfo(userInfo);
    console.log(ok, error);

    if (!ok) return;

    userInfo.role = role;
    userInfo.userId = id;

    const result = await updateUser(userInfo);
    console.log(result);
    navigate('/users');
  };

  return (
    <ContentsBox>
      <DashHead>Edit User</DashHead>
      <form
        action=''
        onSubmit={handleSubmit}
        className='flex gap-6 flex-wrap my-5'
      >
        <FormInput
          type='text'
          placeholder='Enter name'
          label='Full Name'
          value={userInfo.name}
          name='name'
          onChange={handleChange}
        ></FormInput>
        <FormInput
          type='email'
          placeholder='Enter email'
          label='Email'
          value={userInfo.email}
          name='email'
          disabled
        ></FormInput>
        <FormInput
          type='password'
          placeholder='Enter Password'
          label='New Password'
          value={userInfo.password}
          onChange={handleChange}
          name='password'
        ></FormInput>
        <div className='flex items-center gap-4 w-full'>
          <h4 className='font-bold text-sm'>Role:</h4>
          <div className='flex gap-4'>
            <RadioButton
              label='user'
              id='user'
              value='user'
              name='role'
              checked={role === 'user'}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            ></RadioButton>
            <RadioButton
              label='admin'
              id='admin'
              value='admin'
              name='role'
              checked={role === 'admin'}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            ></RadioButton>
          </div>
        </div>
        <div className='mt-5 flex gap-4'>
          <SaveButton>Save</SaveButton>
          <CancelButton
            onClick={() => {
              navigate('/users');
            }}
          >
            Cancel
          </CancelButton>
        </div>
      </form>
    </ContentsBox>
  );
};

export default EditUser;
