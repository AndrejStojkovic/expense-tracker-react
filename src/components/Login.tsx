import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import Alert from './Utils/Alert';

const Login = (props: any) => {
  const email = useRef<HTMLInputElement>(null!);
  const password = useRef<HTMLInputElement>(null!);
  const [rememberMe, setRememberMe] = useState(false);
  const [showError, setShowError] = useState(true);
  const [errorMessage, setErrorMessage] = useState('You must enter an e-mail!');

  const LoginHandle = (e: React.FormEvent<HTMLButtonElement>) => {
    // Check Form
    if(email.current.value === '') {
      console.log('email empty');
    }

    if(password.current.value === '') {
      console.log('pw empty');
    }

    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(rememberMe);
  }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <Alert type='error' msg={errorMessage} show={showError} />
      <div className='text-blue-500 no-underline font-extrabold text-3xl cursor-default mb-4'>
        ExpenseTracker
      </div>
      <div className='w-full bg-white rounded-lg drop-shadow-custom md:mt-0 sm:max-w-md xl:p-0'>
        <div className='p-6 space-y-4 sm:p-8'>
          <h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>
              Sign in
          </h1>
          <form action='#'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>Your email</label>
              <input type='email' name='email' id='email' ref={email} className='bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2' placeholder='name@company.com' />
            </div>
            <div className='mt-2'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
              <input type='password' name='password' id='password' ref={password} placeholder='••••••••••••' className='bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2' />
            </div>
            <div className='flex items-center justify-between mt-2 mb-4'>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input id='remember' aria-describedby='remember' type='checkbox' onChange={() => setRememberMe(!rememberMe)} defaultChecked={false} className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300' />
                </div>
                <div className='ml-3 text-sm'>
                  <label htmlFor='remember' className='text-gray-500'>Remember me</label>
                </div>
              </div>
              <a href='/' className='text-sm font-medium text-blue-600 hover:underline'>Forgot password?</a>
            </div>
            <button type='submit' className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              onClick={(e) => LoginHandle(e)}>
              Sign in
            </button>
            <p className='text-sm font-light text-gray-500 mt-5'>
                Don't have an account yet? <Link to='/signup' className='font-medium text-blue-600 hover:underline'>Sign up</Link>
            </p>
          </form>
        </div>
      </div>

      <div className='mt-4 mb-5'>
        &copy; 2022 Project by <a className='text-blue-500 hover:text-blue-600 font-semibold' href='https://github.com/AndrejStojkovic'>Andrej Stojkovikj</a>
        <span className='mx-1'>-</span>
        <a className='text-blue-500 hover:text-blue-600 font-semibold' href='https://github.com/AndrejStojkovic/expense-tracker-react'>Github Repo</a>
      </div>
    </div>
  )
}

export default Login;