import React, { useEffect, useState } from 'react';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import FormInput from '../utils/FormInput';
import RadioButton from '../utils/RadioButton';
import SaveButton from '../utils/SaveButton';
import CancelButton from '../utils/CancelButton';
import { addUser } from '../../api/users';
import { useNavigate } from 'react-router';
import Checkbox from '../utils/Checkbox';
import FormTextArea from '../utils/FormTextArea';
import { addNewPackage } from '../../api/packages';

const AddPackage = () => {
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  return (
    <ContentsBox>
      <DashHead>Add New Package</DashHead>
      <form
        action='http://localhost:8000/api/package/create'
        method='POST'
        // onSubmit={handleSubmit}
        className='flex gap-6 flex-wrap my-5'
        encType='multipart/form-data'
      >
        <FormInput
          type='text'
          placeholder='Enter name'
          name='title'
          label='Package Name'
          required
        />
        <FormInput
          type='text'
          placeholder='Enter title description'
          label='Title Description'
          name='titleDesc'
        />
        <FormInput
          type='number'
          label='Price'
          placeholder='Price in USD'
          name='price'
          min='10'
          required
        />
        <FormInput type='number' label='Days' name='days' min='2' />
        <FormInput
          type='text'
          placeholder='October - December'
          label='Best Season'
          name='bestSeason'
        />
        <FormInput
          type='text'
          placeholder='Teahouse - Hotel'
          label='Accomodation'
          name='accomodation'
        />
        <FormInput
          type='number'
          label='MaxElevation'
          placeholder='in meters'
          name='maxElevation'
          min='100'
        />
        <FormInput
          type='file'
          label='Featured Image'
          accept='.png,.jpg,.jpeg,.svg'
          name='image'
        />
        <div className='flex gap-10'>
          <Checkbox
            label='Add to Featured ?'
            name='includeInFeatured'
            value='on'
          />
          <Checkbox
            label='Add to Recommended ?'
            name='recommended'
            value='on'
          />
        </div>
        <FormTextArea
          label='Description'
          placeholder='Enter description'
          name='description'
          required
        />

        <div className='mt-5 flex gap-4 w-full'>
          <SaveButton>Save</SaveButton>
          <CancelButton onClick={() => navigate('/packages')}>
            Cancel
          </CancelButton>
        </div>
      </form>
    </ContentsBox>
  );
};

export default AddPackage;
