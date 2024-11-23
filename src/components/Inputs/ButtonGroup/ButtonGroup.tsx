import * as React from 'react';
import { IButtonProps } from '../Button/Button';
import { IIconButtonProps } from '../IconButton/IconButton';

export type IButtonGroupItem = Omit<IButtonProps | IIconButtonProps, 'variant' | 'size' | 'rounded'>;

export interface IButtonGroupProps {
  children: React.ReactElement<IButtonGroupItem>[];
  variant?: 'none' | 'ghost' | 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: 'full' | 'none' | 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  style?: React.CSSProperties;

  slot?: {
    item?: IButtonGroupItem;
  };

  override?: {
    className?: string;
    style?: React.CSSProperties;
  };
}

export const ButtonGroup = ({
  children,
  variant = 'solid',
  size = 'md',
  rounded = 'md',
  className,
  style,
  slot,
  override,
}: IButtonGroupProps) => {
  let css = 'flex';
  if (className) css += ` ${className}`;
  if (override?.className) css = override.className;

  const childs = React.Children.toArray(children) as React.ReactElement<IButtonGroupItem>[];

  return (
    <ul className={css} style={style}>
      {childs.map((child, index) => {
        const pos = index === 0 ? 'l' : index === childs.length - 1 ? 'r' : null;

        return (
          <li key={index}>
            <child.type
              {...slot?.item}
              {...child.props}
              variant={variant}
              size={size}
              rounded={pos ? [pos, rounded] : rounded}
              className={[child.props?.className, slot?.item?.className].join(' ')}
              style={{ ...child.props?.style, ...slot?.item?.style }}
            />
          </li>
        );
      })}
    </ul>
  );
};
