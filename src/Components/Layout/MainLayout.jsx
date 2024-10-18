import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function MainLayout() {
  return (
    <>
      <div className='bg-blue-gray-600'>
        <Header />
        <Outlet />
        <Footer />
     </div>
    </>
  );
}
export default MainLayout;
