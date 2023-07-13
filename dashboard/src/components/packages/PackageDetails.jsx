import React, { useEffect, useState } from 'react';
import ContentsBox from '../ContentsBox';
import DashHead from '../utils/DashHead';
import { useNavigate, useParams } from 'react-router';
import { getSinglePackage } from '../../api/packages';
import DisplayDetails from './DisplayDetails';
import AddButton from '../utils/AddButton';
import CancelButton from '../utils/CancelButton';

const PackageDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [singlePackage, setPackage] = useState('');

  const fetchSinglePackage = async (id) => {
    const res = await getSinglePackage(id);
    setPackage(res);
  };

  useEffect(() => {
    fetchSinglePackage(id);
  }, []);

  console.log(singlePackage);

  return (
    <ContentsBox>
      <DashHead>Package Details #{id}</DashHead>
      <div>
        <DisplayDetails title='ID' content={singlePackage.id} />
        <DisplayDetails title='Title' content={singlePackage.title} />
        <DisplayDetails
          title='Title Description'
          content={singlePackage.titleDesc}
        />
        <DisplayDetails title='Price' content={`${singlePackage.id}$`} />
        {singlePackage.days > 0 && (
          <DisplayDetails title='Days' content={`${singlePackage.days}`} />
        )}
        {singlePackage.featuredImg && (
          <DisplayDetails
            title='Featured Image'
            content={
              <a
                href={singlePackage.featuredImg}
                target='_blank'
                className='underline text-blue'
              >
                View Image
              </a>
            }
          />
        )}
        {singlePackage.accomodation && (
          <DisplayDetails
            title='Accomodation'
            content={`${singlePackage.accomodation}m`}
          />
        )}
        {singlePackage.bestSeason && (
          <DisplayDetails
            title='Best Season'
            content={`${singlePackage.bestSeason}`}
          />
        )}
        {singlePackage.maxElevation > 0 && (
          <DisplayDetails
            title='Max Elevation'
            content={`${singlePackage.maxElevation}`}
          />
        )}
        <DisplayDetails
          title='Include In Featured?'
          content={`${singlePackage.includeInFeatured}`}
        />
        <DisplayDetails
          title='Include In Recommended?'
          content={`${singlePackage.recommended}`}
        />
        {singlePackage.description && (
          <DisplayDetails
            title='Description'
            content={`${singlePackage.description}`}
          />
        )}
        <div className='mt-10 flex gap-4 w-full'>
          <AddButton to={`/edit-package/${singlePackage.id}`}>
            Edit Package
          </AddButton>
          <CancelButton onClick={() => navigate('/packages')}>
            Back
          </CancelButton>
        </div>
      </div>
    </ContentsBox>
  );
};

export default PackageDetails;
