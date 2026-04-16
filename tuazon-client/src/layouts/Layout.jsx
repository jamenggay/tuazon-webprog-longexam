import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <div className="app-shell min-h-screen text-slate-900">
      <NavBar />
      <main className="pb-10 pt-24 md:pb-14 md:pt-28">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;
