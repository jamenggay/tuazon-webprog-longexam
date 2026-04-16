import { NavLink } from "react-router-dom";
import logo from "../assets/img/nubdexchange_logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
];

const navLinkClassName = ({ isActive }) =>
  [
    "rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-200",
    isActive
      ? "border-amber-700/50 bg-amber-700 text-amber-50 shadow-[0_10px_24px_rgba(139,94,19,0.18)]"
      : "border-transparent text-slate-600 hover:border-amber-700/30 hover:bg-white/80 hover:text-slate-900",
  ].join(" ");

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-[rgba(251,247,239,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="BulldogEx"
            className="h-11 w-11 rounded-full border border-amber-700/30 bg-white/90 object-contain p-1 shadow-[0_10px_24px_rgba(139,94,19,0.12)]"
          />
          <div className="space-y-0.5">
            <p className="text-lg font-semibold uppercase tracking-[0.22em] text-slate-500">
              Campus Store
            </p>
            <p className="font-[var(--font-display)] text-2xl font-semibold text-slate-900">
              BulldogEx Shop
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          <nav className="flex items-center gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <NavLink
            to="/auth/signin"
            className="rounded-full border border-amber-700/60 bg-amber-700 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-amber-800"
          >
            Log In
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;