import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
}

export const Container: React.FC<PropsWithChildren<IProps>> = ({children, className}) => {
  return (
    <div className={`max-w-[1284px] p-[0px_15px] m-[0px_auto] ${className ? className: ''}`}>
      {children}
    </div>
  );
};