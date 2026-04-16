import Button from '../../components/Button';
import logo from '../../assets/img/nubdexchange_logo.png';
import merchImage from '../../assets/img/prod12.jpg';
import booksImage from '../../assets/img/prod10.jpg';
import uniformImage from '../../assets/img/medtech.jpg';
import accessoryImage from '../../assets/img/prod14.jpg';

const AboutPage = () => {
  return (
    <div className="page-stack">
      <section className="section-block">
        <div className="section-inner grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="panel-card p-6">
            <div className="image-frame flex min-h-72 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),rgba(232,218,190,0.9))]">
              <img src={logo} alt="BulldogEx" className="h-36 w-36 rounded-full border border-amber-700/30 bg-white/95 object-contain p-2 shadow-[0_18px_30px_rgba(139,94,19,0.14)]" />
            </div>
          </div>

          <div>
            <p className="eyebrow mb-3 text-[20px] font-bold">
              About BulldogEx
            </p>
            <h1 className="heading-xl max-w-xl text-slate-900">
              Your one-stop campus shop for NU essentials.
            </h1>
            <p className="body-copy mt-4 max-w-xl">
              BulldogEx is a student-focused online shop designed to make it easier
              to find uniforms, books, and official NU merchandise in one place.
              We focus on simple browsing, clear product details, and a smooth
              ordering experience for everyday campus needs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/products">Browse Products</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="mb-7 pl-5 ">
            <p className="eyebrow text-[25px] font-bold">
              Store Overview
            </p>
            <h2 className="heading-lg mt-3 text-slate-900 eyebrow text-[20px] font-bold">
              What we offer
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 pl-5">
            <div className="metric-card">
              <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Product Line</p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">16</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Available Items
              </p>
            </div>
            <div className="metric-card">
              <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Categories</p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">4</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Uniforms, Books, Merch, Apparel
              </p>
            </div>
            <div className="metric-card">
              <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Availability</p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">Flexible</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                In Stock & Preorder
              </p>
            </div>
            <div className="metric-card">
              <p className="text-sm uppercase tracking-[0.26em] text-slate-500">Target Users</p>
              <p className="mt-4 text-4xl font-semibold text-slate-900">NU</p>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Students
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner grid gap-6 lg:grid-cols-[1.1fr_0.9fr] pl-5 pt-20">
          <div>
            <p className="eyebrow text-[25px] font-bold">
              How It Works
            </p>
            <div className="mt-6 space-y-4">
              <article className="panel-card">
                <h3 className="text-2xl font-semibold text-slate-900">Browse by Category</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Quickly explore uniforms, books, and merchandise organized for easy navigation.
                </p>
              </article>

              <article className="panel-card">
                <h3 className="text-2xl font-semibold text-slate-900">Select Your Items</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  View product details, pricing, and availability before placing your order.
                </p>
              </article>

              <article className="panel-card">
                <h3 className="text-2xl font-semibold text-slate-900">Order & Pickup</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Place your order online and wait for updates on when your items are ready.
                </p>
              </article>
            </div>
          </div>

          <div className="panel-card p-5">
            <p className="eyebrow">
              Shop Categories
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="image-frame flex aspect-square items-center justify-center">
                <img src={merchImage} alt="Merchandise category" className="h-full w-full object-cover" />
              </div>
              <div className="image-frame flex aspect-square items-center justify-center">
                <img src={booksImage} alt="Books category" className="h-full w-full object-cover" />
              </div>
              <div className="image-frame flex aspect-square items-center justify-center">
                <img src={uniformImage} alt="Uniforms category" className="h-full w-full object-cover" />
              </div>
              <div className="image-frame flex aspect-square items-center justify-center">
                <img src={accessoryImage} alt="Accessories category" className="h-full w-full object-cover" />
              </div>
            </div>
            <Button to="/products" className="mt-5">View All Products</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;