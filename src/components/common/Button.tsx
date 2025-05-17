import type React from 'react';

/**
 * Button component is a reusable button element.
 * It accepts children, className, type, onClick handler, and disabled state.
 * @param {Object} props - The props for the Button component.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {string} [props.className] - Additional CSS classes for the button.
 * @param {'button' | 'submit' | 'reset'} [props.type] - The type of the button.
 * @param {() => void} [props.onClick] - The click event handler.
 * @param {boolean} [props.disabled] - The disabled state of the button.
 * * @returns {JSX.Element} The Button component.
 */

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
      className={`bg-primary font-headings px-2 py-1 rounded-md text-white items-center hover:bg-hover cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
