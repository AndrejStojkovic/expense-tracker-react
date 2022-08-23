import React from 'react';

const Categories = () => {
  return (
    <div className='flex-1 bg-white drop-shadow-custom p-6 pt-4 ml-6'>
      <div className='text-xl font-bold text-blue-500'>Categories</div>

      <div className='container mx-auto px-24 mb-10'>
        <div className='w-full flex justify-end items-center mt-4 mb-3'>
          <button className='bg-green-500 hover:bg-green-600 text-white font-semibold p-2 rounded-md flex items-center gap-1 drop-shadow-md'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
            </svg>
            Add Category
          </button>
        </div>

        <div className='relative border-1'>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-md text-gray-700 bg-gray-100'>
              <tr>
                <th scope='col' className='w-2/5 py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='w-1/5 py-3 px-6'>
                  Color
                </th>
                <th scope='col' className='w-1/5 py-3 px-6'>
                  Type
                </th>
                <th scope='col' className='w-1/5 py-3 px-6'>
                  Actions
                </th>
              </tr>
            </thead>
            <thead>
              <tr className='bg-white border-b'>
                <th scope='row' className='py-2 px-6 font-medium text-gray-900 whitespace-nowrap'>
                  Category 1
                </th>
                <th scope='row' className='py-2 px-6 font-medium text-gray-900 whitespace-nowrap'>
                  <div className='w-full h-4 border-2 border-green-500 bg-green-300 rounded-sm'></div>
                </th>
                <th scope='row' className='py-2 px-6 font-medium text-gray-900 whitespace-nowrap'>
                  <div className='w-full p-1 bg-green-500 rounded text-white text-center'>
                    Income
                  </div>
                </th>
                <th scope='row' className='py-2 px-6 font-medium text-gray-900 whitespace-nowrap flex justify-center'>
                  <button className='text-gray-900 hover:text-gray-600 hover:bg-gray-100 p-1 rounded-sm hover:cursor-pointer' title='Edit Category'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                  </button>

                  <button className='text-red-500 hover:text-red-600 hover:bg-red-100 p-1 rounded-sm hover:cursor-pointer' title='Delete Category'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Categories;