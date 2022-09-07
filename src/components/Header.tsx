import { Link } from 'react-router-dom';

const Header = () => {
  return (
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
            <li>
              <button className='inline-block text-gray-600 hover:text-gray-900 no-underline py-2 px-4 font-semibold'
                onClick={() => console.log('log out')}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;