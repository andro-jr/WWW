'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CustomButton } from '@/components';
import { useRouter } from 'next/navigation';
import { start } from 'repl';
import FormInput from '@/components/FormInput';

const login = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);

  // console.log(firstName);
  // console.log(lastName);
  // console.log(email);
  // console.log(password);
  // console.log(confirmPassword);

  const handleClick = (event: any) => {
    event.preventDefault();

    try {
      if (
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        password === '' ||
        confirmPassword === '' ||
        checked === false
      ) {
        alert('please fill in all the details');
      } else if (
        firstName.trim().length > 0 &&
        lastName.trim().length > 0 &&
        email.trim().includes('@', 0) &&
        password === confirmPassword &&
        checked === true
      ) {
        const adminPayload = {
          firstName,
          lastName,
          email,
          password,
        };
        console.log(adminPayload);
        router.push('/');
      } else {
        alert('Please fill in all the details correctly');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='h-screen mx-auto'>
      <div className='h-full w-full shadow-lg overflow-hidden bg-white mx-auto flex'>
        <div className='hidden lg:flex image image-overlay w-8/12 flex-col items-center justify-center text-center px-20'>
          {/* <Image></Image> */}
          <h1 className='text-white text-6xl font-bold drop-shadow-sm'>
            Travel Nepal with us .
          </h1>
          <div>
            <p className='text-white mt-5 drop-shadow-sm'>
              Embark on unforgettable adventures, from exotic destinations to
              hidden gems, with our comprehensive travel guide. Experience the
              joy of exploring, one journey at a time
            </p>
          </div>
        </div>

        <div className='px-8 sm:px-20 flex flex-col items-start justify-center w-full lg:w-1/3'>
          <h1 className='tertiary-heading mb-10 text-center w-full tracking-wider	'>
            Sign Up
          </h1>

          <form action='#' className='w-full'>
            <FormInput
              name='fullName'
              label='Full Name'
              placeholder='Full Name'
              type='text'
            />
            <FormInput
              name='email'
              label='Email'
              placeholder='Email'
              type='email'
            />
            <FormInput
              name='password'
              label='Password'
              placeholder='Password'
              type='password'
            />

            <div className='mt-7'>
              <CustomButton
                title='Sign Up'
                backgroundStyles='w-full bg-primary py-3 rounded-xl'
                textStyles='text-center text-white text-uppercase text-sm tracking-widest'
                btnType='button'
                handleClick={handleClick}
              />
            </div>
          </form>
          <p className='text-center w-full mt-3 text-black-60'>
            Already have an account? <Link href= "/login"><strong>Sign In</strong></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default login;
