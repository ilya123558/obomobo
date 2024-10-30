import React, { PropsWithChildren } from 'react';

export const InfoMessage: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className="flex items-center mt-[10px]">
      <svg fill="#debe1a" width="17px" height="17px" viewBox="0 0 16.00 16.00" xmlns="http://www.w3.org/2000/svg" stroke="#ea3434" strokeWidth="0.00016">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0-2A5 5 0 1 0 8 3a5 5 0 0 0 0 10zm0-9a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm0 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" id="a"></path>
        </g>
      </svg>
      <p className='text-[16px] text-[#debe1a] ml-[5px]'>
        {children}
      </p>
    </div>
  );
};