import type React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
};
export const Button = ({
  children,
  className = '',
  type = 'button',
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`bg-primary font-headings px-2 py-1 rounded-md text-white items-center hover:bg-hover ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
