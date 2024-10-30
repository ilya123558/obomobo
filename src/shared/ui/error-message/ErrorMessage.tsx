import React, { PropsWithChildren } from 'react';

interface IProps {
  classNameSvg?: string
  className?: string
}

export const ErrorMessage: React.FC<PropsWithChildren<IProps>> = ({children, classNameSvg, className}) => {
  return (
    <div className={`flex items-center mt-[10px] ${className}`}>
      <svg className={`sm:w-[17px] sm:h-[17px] w-[12px] h-[12px]  ${classNameSvg ? classNameSvg : ''}`} fill="#ea3434" width="17px" height="17px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" stroke="#ea3434" strokeWidth="0.00016">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-2A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" id="a"></path>
        </g>
      </svg>
      <p className='sm:text-[16px] text-[11px] text-[#ea3434] ml-[5px]'>
        {children}
      </p>
    </div>
  );
};