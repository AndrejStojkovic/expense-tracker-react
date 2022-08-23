import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Categories from './components/Categories';

function App() {
  return (
    <div className='App'>
      <nav id='header' className='bg-white w-full z-10 top-0 drop-shadow-custom'>
        <div className='w-full max-w-screen-lg mx-auto flex flex-wrap items-center justify-between mt-0 py-2'>
          <Link to='/' className='text-blue-500 hover:text-blue-600 no-underline hover:no-underline font-extrabold text-2xl'>
            ExpenseTracker
          </Link>

          <div className='w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-gray-100 md:bg-transparent z-20'>
            <ul className='list-reset lg:flex justify-end flex-1 items-center'>
              <li>
                <Link to='/' className='inline-block text-gray-600 hover:text-gray-900 no-underline py-2 px-4 font-semibold'>Home</Link>
              </li>
              <li>
                <Link to='/help' className='inline-block text-gray-600 hover:text-gray-900 no-underline py-2 px-4 font-semibold'>Need help?</Link>
              </li>
              <li className='mx-2 text-gray-300'>|</li>
              <li>
                <Link to='/profile' className='flex items-center hover:bg-gray-100 px-2 py-1 rounded-md'>
                  <img src='./media/no-user-photo.jpg' className='rounded-full h-8 w-8' alt='user' />
                  <div className='inline-block text-gray-600 py-2 pl-2'>
                    Hi, <span className='font-semibold'>John</span>!
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='w-full max-w-screen-lg mx-auto flex flex-wrap items-start justify-between py-5'>
        <div className='flex-none bg-white drop-shadow-custom'>
          <ul className='space-y-2 py-2'>
            <li>
              <Link to='/profile' className='flex items-center p-2 px-6 text-base font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="ml-2 font-normal">Profile</span>
              </Link>
            </li>
            <li>
              <Link to='/' className='flex items-center p-2 px-6 text-base font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="ml-2 font-normal">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to='/categories' className='flex items-center p-2 px-6 text-base font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
                <span className="ml-2 font-normal">Categories</span>
              </Link>
            </li>
            <li>
              <Link to='/transactions' className='flex items-center p-2 px-6 text-base font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="ml-2 font-normal">Transactions</span>
              </Link>
            </li>
            <li>
              <Link to='/reports' className='flex items-center p-2 px-6 text-base font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <span className="ml-2 font-normal">Reports</span>
              </Link>
            </li>
            <li>
              <Link to='/settings' className='flex items-center p-2 px-6 text-base font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="ml-2 font-normal">Settings</span>
              </Link>
            </li>
            <li>
              <Link to='/help' className='flex items-center p-2 px-6 text-base font-normal text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="ml-2 font-normal">Help</span>
              </Link>
            </li>
          </ul>
        </div>


        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/categories' element={<Categories />} />
          {/* <Route path='/help' element={<Help />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/settings' element={<Settings />} />*/}
        </Routes>
        
      </div>

      <footer className='bg-white w-full md:max-w-screen-lg mx-auto z-10 top-0 drop-shadow-custom text-center p-5 text-gray-500'>
        &copy; 2022 Project by <a className='text-blue-500 hover:text-blue-600 font-semibold' href='https://github.com/AndrejStojkovic'>Andrej Stojkovikj</a>
        <span className='mx-1'>-</span>
        <a className='text-blue-500 hover:text-blue-600 font-semibold' href='https://github.com/AndrejStojkovic/expense-tracker-react'>Github Repo</a>
      </footer>
    </div>
  );
}

export default App;
