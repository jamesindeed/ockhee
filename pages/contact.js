import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const service = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
const template = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;
const user = process.env.NEXT_PUBLIC_EMAILJS_USER;

const contact = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_q1ofane',
        'template_pwnd56u',
        e.target,
        'user_mqTLj4VvqETSGmXipA8U5'
      )
      .then(
        (res) => {
          console.log(res.text);
        },
        (err) => {
          console.log(err.text);
        }
      );
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 4000);
  }

  return (
    <div className='flex flex-col w-4/5 p-10 mx-auto my-5 align-middle bg-white border border-gray-200 rounded-lg md:w-2/3'>
      <h2 className='text-3xl font-bold leading-tight text-gray-900 lg:text-5xl'>
        Contact Me
      </h2>
      <div className='pt-2 pb-8 text-gray-700'>
        Hate forms? Send me an{' '}
        <span className='underline'>
          <a href='mailto:yr483azaa@mozmail.com'>email</a>
        </span>{' '}
        instead.
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <span className='text-sm font-bold text-gray-600 uppercase'>
            Full Name
          </span>
          <input
            className='w-full px-3 py-2 mt-1 text-sm text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200'
            type='text'
            placeholder=''
            required
            name='name'
          ></input>
        </div>
        <div className='mt-8'>
          <span className='text-sm font-bold text-gray-600 uppercase'>
            Email
          </span>
          <input
            className='w-full px-3 py-2 mt-1 text-sm text-gray-700 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200'
            type='text'
            required
            name='email'
          ></input>
        </div>
        <div className='mt-8'>
          <span className='text-sm font-bold text-gray-600 uppercase'>
            Message
          </span>
          <textarea
            name='comment'
            required
            className='w-full p-3 mt-1 text-sm text-gray-700 bg-gray-100 rounded-lg outline-none resize-none h-30 min-h-40 max-h-100 focus:ring-2 focus:ring-gray-200'
          ></textarea>
        </div>
        <div className='mt-8'>
          <button className='w-full p-3 text-sm font-bold tracking-wide text-gray-100 uppercase transition bg-indigo-600 rounded-lg duration-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline'>
            Send Message
          </button>
          {showSuccessMessage && (
            <span className='float-right mt-3 text-sm font-semibold text-green-500'>
              Comment submitted for review
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default contact;
