import React, { useEffect, useState } from 'react';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import FormInput from '../utils/FormInput';
import RadioButton from '../utils/RadioButton';
import SaveButton from '../utils/SaveButton';
import CancelButton from '../utils/CancelButton';
import { addUser } from '../../api/users';
import { useNavigate } from 'react-router';

const validateUserInfo = (userInfo) => {
  const { name, email, password } = userInfo;
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!name.trim()) return { ok: false, error: 'Name is missing' };
  if (!email.trim()) return { ok: false, error: 'Email is missing' };
  if (!isValidEmail.test(email))
    return { ok: false, error: 'Email is invalid' };
  if (!password.trim()) return { ok: false, error: 'Password is missing' };
  if (password.length < 8)
    return { ok: false, error: 'Password must be atlest 8 characters' };

  return { ok: true };
};

const EditUser = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [role, setRole] = useState('user');

  const handleInputChange = ({ target }) => {
    const { value, name } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  console.log(userInfo, role);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { ok, error } = validateUserInfo(userInfo);
    console.log(ok, error);

    if (!ok) return;

    userInfo.role = role;

    const result = await addUser(userInfo);
    console.log(result);
    navigate('/users');
  };

  return (
    <ContentsBox>
      <DashHead>Add New User</DashHead>
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
          onChange={handleInputChange}
        ></FormInput>
        <FormInput
          type='email'
          placeholder='Enter email'
          label='Email'
          value={userInfo.email}
          name='email'
          onChange={handleInputChange}
        ></FormInput>
        <FormInput
          type='password'
          placeholder='Enter Password'
          label='New Password'
          value={userInfo.password}
          name='password'
          onChange={handleInputChange}
        ></FormInput>

        <div className='flex items-center gap-4 w-full'>
          <h4 className='font-bold text-sm'>Role:</h4>
          <div className='flex gap-4'>
            <RadioButton
              label='user'
              id='user'
              name='role'
              value='user'
              onChange={(e) => setRole(e.target.value)}
            ></RadioButton>
            <RadioButton
              label='admin'
              id='admin'
              name='role'
              value='admin'
              onChange={(e) => setRole(e.target.value)}
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
