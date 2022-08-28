import React from 'react';

const Settings = () => {
  return (
    <div className='flex-1 bg-white drop-shadow-custom p-6 pt-4 ml-6'>
      <div className='text-xl font-bold text-blue-500 mb-3'>Settings</div>

      <div>
        <div className='flex'>
          <input type='checkbox' name='notifications' id='notifications' className='mr-1' />
          <label htmlFor='notifications'>Enable Notifications</label>
        </div>
      </div>
    </div>
  )
}

export default Settings;