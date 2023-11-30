import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'flex h-10 items-center rounded-lg bg-primaryBlue font-medium text-lightBlue transition-colors hover:bg-lightBlue hover:text-primaryBlue active:bg-primaryBlue',
        className,
      )}
    >
      {children}
    </button>
  );
}
