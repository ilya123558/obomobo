import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
}

export const TitleH6: React.FC<PropsWithChildren<IProps>> = ({className, children}) => {
  return (
    <h6 className={`text-[10px] font-semibold text-black ${className ? className : ''}`}>
      {children}
    </h6>
  );
};