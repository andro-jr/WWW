import React, { useEffect, useState } from 'react';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import FormInput from '../utils/FormInput';
import RadioButton from '../utils/RadioButton';
import SaveButton from '../utils/SaveButton';
import CancelButton from '../utils/CancelButton';
import { addUser } from '../../api/users';
import { useNavigate, useParams } from 'react-router';
import Checkbox from '../utils/Checkbox';
import FormTextArea from '../utils/FormTextArea';
import { addNewPackage, getSinglePackage } from '../../api/packages';

const EditPackage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [singlePackage, setPackage] = useState('');

  const [includeInFeaturedCheck, setIncludeInFeaturedCheck] = useState('');
  const [recommendedCheck, setRecommendedCheck] = useState('');

  const fetchSinglePackage = async (id) => {
    const res = await getSinglePackage(id);
    setPackage({
      title: res.title,
      titleDesc: res.titleDesc,
      description: res.description,
      days: res.days,
      bestSeason: res.bestSeason,
      accomodation: res.accomodation,
      includeInFeatured: res.includeInFeatured,
      price: res.price,
      recommended: res.recommended,
      maxElevation: res.maxElevation,
    });
    setIncludeInFeaturedCheck(res.includeInFeatured);
    setRecommendedCheck(res.recommended);
  };

  useEffect(() => {
    fetchSinglePackage(id);
  }, []);

  const handleChange = ({ target }) => {
    const { value, name } = target;
    setPackage({ ...singlePackage, [name]: value });
  };

  const handleFeaturedCheckboxChange = () => {
    setIncludeInFeaturedCheck((state) => !state);
  };
  const handleRecommendedCheckboxChange = () => {
    setRecommendedCheck((state) => !state);
  };

  useEffect(() => {
    setPackage({
      ...singlePackage,
      recommended: recommendedCheck,
    });
  }, [recommendedCheck]);

  useEffect(() => {
    setPackage({
      ...singlePackage,
      includeInFeatured: includeInFeaturedCheck,
    });
  }, [includeInFeaturedCheck]);

  console.log(singlePackage);

  return (
    <ContentsBox>
      <DashHead>Edit Package #{id}</DashHead>
      <form
        action={`http://localhost:8000/api/package/update-package/${id}`}
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
          value={singlePackage.title}
          onChange={handleChange}
          required
        />
        <FormInput
          type='text'
          placeholder='Enter title description'
          label='Title Description'
          name='titleDesc'
          value={singlePackage.titleDesc}
          onChange={handleChange}
        />
        <FormInput
          type='number'
          label='Price'
          placeholder='Price in USD'
          name='price'
          value={singlePackage.price}
          onChange={handleChange}
          required
        />
        <FormInput
          type='number'
          label='Days'
          name='days'
          value={singlePackage.days}
          onChange={handleChange}
        />
        <FormInput
          type='text'
          placeholder='October - December'
          label='Best Season'
          value={singlePackage.bestSeason}
          onChange={handleChange}
          name='bestSeason'
        />
        <FormInput
          type='text'
          placeholder='Teahouse - Hotel'
          label='Accomodation'
          name='accomodation'
          value={singlePackage.accomodation}
          onChange={handleChange}
        />
        <FormInput
          type='number'
          label='MaxElevation'
          placeholder='in meters'
          name='maxElevation'
          value={singlePackage.maxElevation}
          onChange={handleChange}
        />
        <FormInput
          type='file'
          label='New Featured Image'
          accept='.png,.jpg,.jpeg,.svg'
          name='image'
          //   value={singlePackage.featuredImg}
        />
        <div className='flex gap-10'>
          <Checkbox
            label='Add to Featured ?'
            name='includeInFeatured'
            value={singlePackage.recommended}
            onClick={handleFeaturedCheckboxChange}
            defaultChecked={singlePackage.includeInFeatured}
          />
          <Checkbox
            label='Add to Recommended ?'
            name='recommended'
            value={singlePackage.recommended}
            onClick={handleRecommendedCheckboxChange}
            defaultChecked={singlePackage.recommended}
          />
        </div>
        <FormTextArea
          label='Description'
          placeholder='Enter description'
          name='description'
          value={singlePackage.description}
          onChange={handleChange}
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

export default EditPackage;
