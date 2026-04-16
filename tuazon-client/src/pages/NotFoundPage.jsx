import Button from "../components/Button";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <div className="app-shell min-h-screen bg-slate-50 text-slate-900">
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl flex-col justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-900/10 bg-white/95 p-8 shadow-[0_24px_40px_rgba(15,23,42,0.08)]">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-center">
            <div className="space-y-6 flex flex-col items-center justify-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-500">
                Page not found
              </p>
              <h1 className="text-6xl font-semibold tracking-tight text-slate-900 sm:text-7xl">
                404
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600 text-center">
                The page you’re looking for is missing or has moved. Let’s get
                you back on track with the campus store.
              </p>
            </div>

            <div className="space-y-6 rounded-[2rem] bg-slate-950/5 p-6">
              <div className="rounded-[1.75rem] border border-amber-700/10 bg-amber-700/10 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-500">
                  Quick links
                </p>
                <div className="mt-4 space-y-3 text-sm text-slate-700">
                  <Button
                    to="/"
                    className="w-full text-left"
                    variant="secondary"
                  >
                    Homepage
                  </Button>
                  <Button
                    to="/products"
                    className="w-full text-left"
                    variant="secondary"
                  >
                    Products
                  </Button>
                  <Button
                    to="/about"
                    className="w-full text-left"
                    variant="secondary"
                  >
                    About
                  </Button>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-slate-900/10 bg-slate-100 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-600">
                  Need help?
                </p>
                <p className="mt-3 text-sm text-slate-700">
                  If you think this page should exist, return home or explore
                  our featured products to continue shopping.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFoundPage;
