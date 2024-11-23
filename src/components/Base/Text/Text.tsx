import * as React from 'react';

export interface ITextProps {
  tag?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;

  override?: {
    className?: string;
    style?: React.CSSProperties;
  };
}

export const Text = ({ tag = 'p', children, className, style, override }: ITextProps) => {
  let css = '';

  if (tag === 'p') css += ' text-base';
  if (tag === 'span') css += ' text-base';
  if (tag === 'h1') css += ' text-4xl';
  if (tag === 'h2') css += ' text-3xl';
  if (tag === 'h3') css += ' text-2xl';
  if (tag === 'h4') css += ' text-xl';
  if (tag === 'h5') css += ' text-lg';
  if (tag === 'h6') css += ' text-base';
  if (className) css += ` ${className}`;

  if (override?.className) css = override.className;

  return React.createElement(tag, { className, style }, children);
};
