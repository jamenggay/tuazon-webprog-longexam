import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/85 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-amber-700/40 focus:bg-white';

const actionButtonClassName = 'w-full rounded-2xl py-3.5 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <>
      <p className="eyebrow">Create Account</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">Sign Up</h1>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        Create a store account for faster checkout, order updates, and pickup details.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-slate-700">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-slate-700">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="student@email.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-slate-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Password"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account
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
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-slate-900 transition hover:text-amber-700">
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;
