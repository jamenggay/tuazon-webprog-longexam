import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About", to: "/about" },
];

const Footer = () => {
  return (
    <footer className="mx-4 mb-4 rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(135deg,#111827,#1f2937)] px-4 py-10 text-amber-50 shadow-[0_24px_40px_rgba(15,23,42,0.18)] sm:mx-6 sm:px-6 lg:mx-8 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="space-y-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200/80">
            Campus Store
          </p>
          <h2 className="text-3xl font-[var(--font-display)] font-semibold">
            BulldogEx Shop
          </h2>
          <p className="max-w-md text-sm text-slate-300">
            Discover campus-ready products, local pickup plans, and student
            essentials crafted for life on the go.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-200/80">
              Quick links
            </p>
            <div className="mt-4 space-y-2">
              {quickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-sm text-slate-100 transition hover:text-amber-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-amber-200/80">
              Support
            </p>
            <p className="mt-4 max-w-sm text-sm text-slate-300">
              Need help? Reach out to our campus team or visit the product page
              for the latest campus store selections.
            </p>
            <div className="mt-4 text-sm text-slate-300">
              <p>Mon–Fri, 9am–5pm</p>
              <p>campus@bulldogex.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-900/10 pt-6 text-sm text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
          </p>
          <p className="text-slate-300">Products | Cart | Pickup</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
