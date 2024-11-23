import * as React from 'react';
import { ButtonCornerRounded, ButtonRounded, ButtonSize, ButtonType, ButtonVariant } from '../Button/Button';

export interface IIconButtonProps {
  icon: React.ReactNode;
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

export const IconButton = ({
  icon,
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
}: IIconButtonProps) => {
  let css = `cursor-pointer flex items-center justify-center focus:outline-none rounded-${rounded}`;

  if (size === 'sm') css += ' w-8 h-8 text-sm';
  if (size === 'md') css += ' w-10 h-10 text-base';
  if (size === 'lg') css += ' w-12 h-12 text-lg';
  if (size === 'xl') css += ' w-14 h-14 text-xl';

  if (variant === 'none') css += ' disabled:opacity-60 disabled:cursor-not-allowed';
  if (variant === 'ghost')
    css += ` bg-transparent hover:bg-opacity-20 transition-[background-color,opacity] duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed hover:disabled:bg-opacity-10 ${showFocusRing ? 'focus:ring-2' : ''}`;
  if (variant === 'solid')
    css += ` hover:bg-opacity-85 transition-[background-color,opacity] duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed hover:disabled:bg-opacity-100 ${showFocusRing ? 'focus:ring-2' : ''}`;
  if (variant === 'outline')
    css += ` border bg-opacity-40 transition-[background-color,opacity] duration-300 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed hover:disabled:bg-opacity-40 hover:bg-opacity-50 focus:ring-2 ${showFocusRing ? 'focus:ring-2' : ''}`;

  if (className) css += ` ${className}`;

  if (override?.className) css = override.className;

  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (onClick && !disabled) onClick();
    },
    [onClick]
  );

  return (
    <button
      type={type}
      className={css}
      style={style}
      onClick={handleClick}
      disabled={disabled}
      autoFocus={autoFocus}
      aria-label={ariaLabel}
    >
      {icon}
    </button>
  );
};
