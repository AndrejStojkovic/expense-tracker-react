import React from 'react';

const Profile = () => {
  return (
    <div className='flex-1 bg-white drop-shadow-custom p-6 pt-4 ml-6'>
      <div className='text-xl font-bold text-blue-500 mb-5'>Edit Profile</div>

      <div className='flex my-2 items-start'>
        <div className='flex-none w-1/3 mr-20'>
          <div className='mb-2'>
            <label htmlFor='first_name' className='block text-gray-700 text-sm font-bold mb-2'>First Name</label>
            <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='first_name' id='first_name' value='John' />
          </div>
 
          <div>
            <label htmlFor='last_name' className='block text-gray-700 text-sm font-bold mb-2'>Last Name</label>
            <input type='text' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='last_name' id='last_name' value='Doe' />
          </div>
        </div>

        <div className='flex-1 flex flex-col items-center p-0'>
          <div className='text-lg font-semibold text-gray-500 mb-1'>Your Avatar</div>
          <img className='h-40 w-40 rounded-full mt-1 mb-2' src='./media/no-user-photo.jpg' alt='user' />
          <input type="file" className='block text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100
          '/>
        </div>
      </div>

      <hr className='my-6' />

      <div className='text-gray-700'>
        <div className='font-semibold text-lg mb-1'>E-Mail Address</div>
        <div className='flex justify-between'>
          <div>Your E-Mail address is: <span className='font-bold'>johndoe12@etr.com</span></div>
          <button className='text-blue-500 underline'>Change</button>
        </div>
      </div>

      <hr className='my-6' />

      <div className='flex justify-between text-gray-700'>
        <div className='font-semibold text-lg mb-1'>Password</div>
        <button className='text-blue-500 underline'>Change</button>

        {/* if password is changed
          <div className='flex justify-between'>
            <div>Password last changed <span className='font-bold'>1 month ago</span>.</div>
            <button className='text-blue-500 underline'>Change</button>
          </div>
        */}
      </div>

      <hr className='my-6' />

      <div className='mb-10 text-gray-700'>
        <button className='text-red-500 underline'>Delete my Account</button>
        <div>You will receive an e-mail to confirm your decision to delete your account.</div>
      </div>

    </div>
  )
}

export default Profile;