const Footer = () => {
  return (
    <footer className='bg-white w-full md:max-w-screen-lg mx-auto z-10 top-0 drop-shadow-custom text-center p-5 text-gray-500'>
      &copy; 2022 Project by <a className='text-blue-500 hover:text-blue-600 font-semibold' href='https://github.com/AndrejStojkovic'>Andrej Stojkovikj</a>
      <span className='mx-1'>-</span>
      <a className='text-blue-500 hover:text-blue-600 font-semibold' href='https://github.com/AndrejStojkovic/expense-tracker-react'>Github Repo</a>
    </footer>
  )
}

export default Footer;