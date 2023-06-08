import React, { FC, ReactNode } from 'react';
import cn from 'clsx';

interface IContainer {
  children: ReactNode;
  center?: boolean;
  className?: string
}

export const Container: FC<IContainer> = ({ children, center = false, className }) => {
  return (
    <div
      className={cn('container mx-auto px-4 ', className, {
        'flex items-center justify-center min-h-max': center,
      })}
    >
      {children}
    </div>
  );
};
