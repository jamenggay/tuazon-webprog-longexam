import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/85 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-700/40 focus:bg-white';

const actionButtonClassName = 'w-full rounded-2xl py-3.5 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      <p className="eyebrow">Welcome Back</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Log In</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        Access your store account to review orders, saved items, and pickup details.
      </p>

      <form className="mt-3 space-y-5">
        <div className="pb-0 mb-1">
          <label htmlFor="signin-email" className="text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-slate-600">
            <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-amber-700" />
            <span>Remember me</span>
          </label>
          <button type="button" className="font-medium text-slate-700 transition hover:text-amber-700">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
        </Button>

        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          <a href="#" className="block">
            <button className="w-full text-sm text-center bg-white hover:bg-[#fef9f3] transition-colors py-3 border flex items-center justify-center border-slate-200 rounded-[30px] text-white hover:border-slate-400 hover:text-white hover:shadow transition duration-150">
              <img
                src="/src/assets/icons/google-logo.png"
                className="w-5 h-5 mr-2"
                alt="Google Icon"
              />
              <span className="text-black">Login with Google</span>
            </button>
          </a>

          <a href="#" className="block">
            <button className="w-full text-sm text-center bg-white hover:bg-[#fef9f3] transition-colors py-3 border flex items-center justify-center border-slate-200 rounded-[30px] text-white hover:border-slate-400 hover:text-white hover:shadow transition duration-150">
              <img
                src="/src/assets/icons/github-logo.png"
                className="w-6 h-5 mr-2"
                alt="Github Icon"
              />
              <span className="text-black">Login with Github</span>
            </button>
          </a>
        </div>
      </form>

      <div className="mt-8 border-t border-slate-900/10 pt-6 text-sm text-slate-600">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-slate-900 transition hover:text-amber-700">
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;
