import Header from './Header';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';

function RootLayout() {
  return (
    <div>
        <Header />
        <div style={{minHeight:'100vh'}} className='container'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout