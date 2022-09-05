import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, createUserDocument } from './Config/firebase-config';
import { countries } from './Utils/Countries';
import Alert from './Utils/Alert';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const displayError = (msg: string, delay = 5) => {
    setErrorMessage(msg);
    setShowError(true);

    setTimeout(() => {
      setShowError(false);
    }, delay * 1000);
  }

  const SignUpHandle = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Form check
    if(!firstName) { displayError('You need to enter a first name!'); return; }
    if(!lastName) { displayError('You need to enter a last name!'); return; }
    if(!country) {displayError('You need to select a valid country!'); return; }
    if(!email) { displayError('You need to enter an e-mail address!'); return; }
    if(!email.includes('@')) { displayError('E-mail address needs to contain @ symbol!'); return; }
    if(email[email.length - 1] === '@') { displayError('E-mail address needs to contain something after @ symbol!'); return; }
    if(!password) { displayError('You need to enter a password!'); return; }
    if(!confirmPassword) { displayError('You need to enter confirm your password!'); return; }
    if(password !== confirmPassword) { displayError('Password do not match!'); return; }

    try {
      const user = await createUserWithEmailAndPassword(auth, email,password);
      await createUserDocument({user, firstName, lastName, country});
      console.log(user);
    } catch(error) {
      console.log(error);
    }
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
              Sign up
          </h1>
          <form action='#'>
            <div className='flex justify-between'>
              <div>
                <label htmlFor='first_name' className='block mb-2 text-sm font-medium text-gray-900'>First Name</label>
                <input type='text' name='first_name' id='first_name' onChange={(e) => setFirstName(e.target.value)} className='bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2' placeholder='John' required />
              </div>
              <div>
                <label htmlFor='last_name' className='block mb-2 text-sm font-medium text-gray-900'>Last Name</label>
                <input type='text' name='last_name' id='last_name' onChange={(e) => setLastName(e.target.value)} className='bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2' placeholder='Doe' required />
              </div>
            </div>
            <div className='mt-2'>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900'>Your email</label>
              <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)} className='bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2' placeholder='johndoe@company.com' required />
            </div>
            <div className='mt-2'>
              <label htmlFor='country' className='block mb-2 text-sm font-medium text-gray-900'>Country</label>
              <select name='country' id='country' onChange={(e) => setCountry(e.target.value)} className='bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2' required>
                <option selected disabled>Select a country</option>
                {countries.map((el, index) => {
                  return (
                    <option key={index} value={el.name}>
                      {el.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className='mt-2'>
              <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
              <input type='password' name='password' id='password' onChange={(e) => setPassword(e.target.value)} placeholder='••••••••••••' className='bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2' required />
            </div>
            <div className='mt-2 mb-6'>
              <label htmlFor='confirm-password' className='block mb-2 text-sm font-medium text-gray-900'>Confirm Password</label>
              <input type='password' name='confirm-password' id='confirm-password' onChange={(e) => setConfirmPassword(e.target.value)} placeholder='••••••••••••' className='bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2' required />
            </div>
            
            <button type='submit' className='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
              onClick={(e) => SignUpHandle(e)}>
              Create Account
            </button>
            <p className='text-sm font-light text-gray-500 mt-5'>
                Already have an account? <Link to='/login' className='font-medium text-blue-600 hover:underline'>Sign in</Link>
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

export default SignUp;