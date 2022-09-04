import React from 'react';

import { faquestions } from './Utils/FAQuestions';

const Help = () => {
  return (
    <div className='flex-1 bg-white drop-shadow-custom p-6 pt-4 ml-6'>
      <div className='mb-5'>
        <div className='text-lg font-bold mb-2 text-gray-800'>Frequently Asked Questions (FAQ)</div>
        <div id='question'>
          {faquestions.map((obj, index) => {
            return (
              <div key={index} className='mb-1'>
                <div className='font-semibold italic text-md text-slate-800'>Q: {obj.question}</div>
                <div className='text-md text-slate-700'>A: {obj.answer}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className='font-bold mb-5 text-gray-700'>Didn't find the help you were looking for? Submit a ticket below.</div>
      
      <div className='px-20'>
        <div className='text-lg font-bold text-blue-500 mb-2'>Generate a Ticket</div>

        <div className='mb-2'>
          <label htmlFor='subject' className='block text-gray-700 text-sm font-bold mb-1'>Subject</label>
          <input type='text' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='subject' id='subject' />
        </div>

        <div>
          <div className='mb-2'>
            <label htmlFor='msg' className='block text-gray-700 text-sm font-bold mb-1'>Message</label>
            <textarea rows={5} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' name='msg' id='msg'></textarea>
          </div>
        </div>
        <div className='flex justify-end'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 px-5 rounded-md flex items-center gap-1 drop-shadow-md'>
            Submit Ticket
          </button>
        </div>
      </div>
    </div>
  )
}

export default Help;