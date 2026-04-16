import { Link } from 'react-router-dom';

const variantClasses = {
  primary:
    'border-amber-700/50 bg-amber-700 text-amber-50 shadow-[0_12px_24px_rgba(139,94,19,0.22)] hover:-translate-y-0.5 hover:bg-amber-800',
  secondary:
    'border-slate-900/15 bg-white/75 text-slate-800 hover:-translate-y-0.5 hover:border-amber-700/35 hover:bg-amber-50',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] transition duration-200',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {children}
    </button>
  );
};

export default Button;
