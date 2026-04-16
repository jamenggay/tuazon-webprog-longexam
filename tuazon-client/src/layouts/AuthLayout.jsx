import { Outlet } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
import heroImage from '../assets/img/prod11.jpg';

const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-transparent text-slate-900">
      <div className="grid min-h-screen w-full lg:grid-cols-[1fr_0.95fr]">
        <div className="relative flex items-center justify-center overflow-hidden border-b border-slate-900/10 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-16">
          <img src='/src/assets/img/banner-nu-manila.webp' alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,39,0.82),rgba(120,53,15,0.48))]" />
          <div className="relative flex w-full max-w-md flex-col rounded-[2rem] border border-white/20 bg-white/10 p-8 text-amber-50 shadow-[0_24px_40px_rgba(15,23,42,0.22)] backdrop-blur-md sm:p-10">
            <div className="flex items-center gap-4">
              <img src={logo} alt="BulldogEx" className="h-14 w-14 rounded-full border border-white/30 bg-white/90 object-contain p-1" />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-200">BulldogEx Shop</p>
                <h2 className="mt-2 text-3xl font-semibold">Student-ready shopping</h2>
              </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-100">
              Sign in to manage your orders, saved items, and pickup details from one polished campus storefront.
            </p>
          </div>
        </div>

        <main className="flex items-center px-6 py-10 sm:px-10 lg:px-16">
          <div className="panel-card mx-auto w-full max-w-md p-8 sm:p-10">
            <Outlet />
          </div>
        </main>
      </div>
    </section>
  );
};

export default AuthLayout;
