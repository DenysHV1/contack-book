import { Suspense } from 'react';
import AppBar from './AppBar/AppBar';
import Loader from './Loader/Loader';
import Footer from './Footer/Footer'

const Layout = ({ children }) => {
 
  return (
    <div className='container'>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Footer/>
    </div>
  );
};

export default Layout;
