import * as React from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonRounded = 'full' | 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonCorner = 'l' | 'r' | 't' | 'b' | 'tl' | 'tr' | 'bl' | 'br';
export type ButtonCornerRounded = [ButtonCorner, ButtonRounded];
export type ButtonVariant = 'none' | 'ghost' | 'solid' | 'outline';

export interface IButtonProps {
  label: React.ReactNode;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  rounded?: ButtonCornerRounded | ButtonRounded;
  variant?: ButtonVariant;
  disabled?: boolean;
  autoFocus?: boolean;
  showFocusRing?: boolean;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
  ariaLabel?: string;

  override?: {
    className?: string;
    style?: React.CSSProperties;
  };
}

export const Button = ({
  label,
  leading,
  trailing,
  type = 'button',
  size = 'md',
  rounded = 'md',
  variant = 'solid',
  disabled = false,
  autoFocus = false,
  showFocusRing = false,
  onClick,
  className,
  style,
  ariaLabel,
  override,
}: IButtonProps) => {
  let css = `cursor-pointer flex gap-2 items-center justify-center focus:outline-none rounded-${Array.isArray(rounded) ? rounded.join('-') : rounded}`;

  if (size === 'sm') css += ' h-8 px-4 text-sm min-w-8';
  if (size === 'md') css += ' h-10 px-5 text-base min-w-10';
  if (size === 'lg') css += ' h-12 px-6 text-lg min-w-12';
  if (size === 'xl') css += ' h-14 px-7 text-xl min-w-14';

  if (variant === 'none') css += ' disabled:opacity-60 disabled:cursor-not-allowed';
  if (variant === 'ghost')
    css += ` bg-transparent hover:bg-opacity-20 transition-[background-color,opacity] duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed hover:disabled:bg-opacity-10 ${showFocusRing ? 'focus:ring-2' : ''}`;
  if (variant === 'solid')
    css += ` hover:bg-opacity-85 transition-[background-color,opacity] duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed hover:disabled:bg-opacity-100 ${showFocusRing ? 'focus:ring-2' : ''}`;
  if (variant === 'outline')
    css += ` border bg-opacity-40 transition-[background-color,opacity] duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed hover:disabled:bg-opacity-40 hover:bg-opacity-50 focus:ring-2 ${showFocusRing ? 'focus:ring-2' : ''}`;

  if (className) css += ` ${className}`;

  if (override?.className) css = override.className;

  return (
    <button
      type={type}
      disabled={disabled}
      autoFocus={autoFocus}
      onClick={onClick}
      className={css}
      style={style}
      aria-label={ariaLabel}
    >
      {leading}
      {label}
      {trailing}
    </button>
  );
};
