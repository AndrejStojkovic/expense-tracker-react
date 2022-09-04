import React, { useState } from 'react';

const Reports = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(1);

  const handlePageNumberIncrease = () => { if(pageNumber < maxPageNumber) setPageNumber(pageNumber + 1) }
  const handlePageNumberDecrease = () => { if(pageNumber > 1) setPageNumber(pageNumber - 1) }

  return (
    <div className='flex-1 bg-white drop-shadow-custom p-6 pt-4 ml-6'>
      <div className='text-xl font-bold text-gray-800'>Reports</div>

      <div className='container mx-auto px-8 mb-5'>
        <div className='w-full flex justify-end items-center mt-4 mb-3'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded-md flex items-center gap-1 drop-shadow-md'>
            Generate New Report
          </button>
        </div>

        <div className='relative text-center'>
          <table className='w-full text-sm text-gray-500 border-1'>
            <thead className='text-md text-gray-700 bg-gray-100 border-1'>
              <tr>
                <th scope='col' className='w-1/4 p-3'>
                  Name
                </th>
                <th scope='col' className='w-1/4 p-3'>
                  From Date
                </th>
                <th scope='col' className='w-1/4 p-3'>
                  To Date
                </th>
                <th scope='col' className='w-1/4 p-3'>
                  Date Created
                </th>
                <th scope='col' className='w-1/4 p-3 px-6'>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-white border-b hover:bg-gray-50'>
                <th scope='row' className='px-3 py-2 font-medium text-gray-900'>
                  Report 1
                </th>
                <th scope='row' className='px-3 py-2 font-medium text-gray-900'>
                  00:00 - 01.01.1990
                </th>
                <th scope='row' className='px-3 py-2 font-medium text-gray-900'>
                  12:00 - 01.01.1990
                </th>
                <th scope='row' className='px-6 py-2 font-medium text-gray-900'>
                  01.01.1990
                </th>
                <th scope='row' className='px-3 py-2 font-medium text-gray-900 flex justify-center'>
                  <button className='text-red-500 hover:text-red-600 hover:bg-red-100 p-1 rounded-sm hover:cursor-pointer' title='Delete Category'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </th>
              </tr>
            </tbody>
          </table>

          <div className='w-full flex items-center justify-between px-4 mt-2 text-sm'>
            <div>
              Showing page <span className='font-semibold'>{pageNumber}</span> of <span className='font-semibold'>{maxPageNumber}</span>
            </div>
            <div className='flex -space-x-px'>
              <button className='block p-1 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700' onClick={handlePageNumberDecrease}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              
              <input type='number' className='w-8 outline-0 text-lg text-center leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700' onChange={(e) => setPageNumber(e.target.valueAsNumber)} value={pageNumber} min={1} max={maxPageNumber}></input>

              <button className='block p-1 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700' onClick={handlePageNumberIncrease}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports;