import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import SideNav from './SideNav';
import Footer from './Footer';

import Dashboard from './Dashboard';
import Profile from './Profile';
import Categories from './Categories';
import Transactions from './Transactions';
import Reports from './Reports';
import Help from './Help';

const MainApplication = () => {
  return (
    <div>
      <Header />
      <div className='w-full max-w-screen-lg mx-auto flex flex-wrap items-start justify-between py-5'>
        <SideNav />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/help' element={<Help />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default MainApplication;