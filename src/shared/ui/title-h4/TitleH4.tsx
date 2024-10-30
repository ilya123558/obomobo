import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
}

export const TitleH4: React.FC<PropsWithChildren<IProps>> = ({children, className}) => {
  return (
    <h4 className={`font-medium sm:text-[36px] text-[26px] md:text-start text-center mb-[21px] ${className ? className : ''}`}>
      {children}
    </h4>
  );
};