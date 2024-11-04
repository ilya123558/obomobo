import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
}

export const TitleH4: React.FC<PropsWithChildren<IProps>> = ({children, className}) => {
  return (
    <h4 className={`font-medium sm:text-[36px] text-[18px] md:text-start text-center sm:mb-[21px] mb-[15px] ${className ? className : ''}`}>
      {children}
    </h4>
  );
};