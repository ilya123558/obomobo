import { TRole } from '@/entities/auth/types/signup';
import React from 'react';

interface IProps {
  role: TRole
  isActive: boolean
  setActiveRole: (role: TRole) => void
}

export const SignupRoleItem: React.FC<IProps> = ({role, isActive, setActiveRole}) => {
  return (
    <li 
      onClick={() => setActiveRole(role)} 
      className={`relative h-[190px] p-[25px_30px_0px] hover:border-green will-change-transform rounded-[8px] select-none border-[3px] ${isActive ? 'border-green bg-light-cool-gray' : 'border-border-gray'} flex justify-center cursor-pointer transition-all active:scale-95`}
    >
      <div className={`absolute transition-all top-[13px] right-[13px] w-[26px] h-[26px] rounded-full border-[3px] ${isActive ? 'border-green bg-green': 'border-border-gray'} flex items-center justify-center will-change-transform`}>
        <div className="w-full h-full relative">
          <div className={`absolute top-[50%] transition-all left-[50%] translate-x-[-50%] translate-y-[-50%] w-[14px] h-[14px] rounded-full border-[1px] ${isActive ? 'border-white': 'border-transparent'}`}></div>
        </div>
      </div>
      {role === 'client' && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img"  width="40" height="40">
            <path vectorEffect="non-scaling-stroke" stroke="#001e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.28 21h-6.9a1.6 1.6 0 01-1.73-1.5v-4a1.6 1.6 0 011.73-1.5h6.9A1.59 1.59 0 0121 15.5v4a1.66 1.66 0 01-1.72 1.5zM16.9 12h-2.15a.65.65 0 00-.72.66V14h3.59v-1.34a.65.65 0 00-.72-.66zM10.65 17.29h10.35M10.04 5.73a2.73 2.73 0 11-5.46 0 2.73 2.73 0 015.46 0zM3 18.45v-.9a7 7 0 017-7h.09a6.73 6.73 0 011.91.27" />
          </svg>
          <p className='mt-[10px]'>Я клиент, нанимаю для проекта.</p>
        </div>
      )}
      {role === 'specialist' && (
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 24 24" role="img" width='40' height='40'>
            <path vectorEffect="non-scaling-stroke" stroke="#001e00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.43 21H5.99M3 18.45v-.9a7 7 0 017-7h.09a6.94 6.94 0 013.79 1.12m5.5 9.33h-11L10 14h11l-1.62 7zm-4.69-3a.5.5 0 100-1 .5.5 0 000 1zM12.77 5.73a2.73 2.73 0 11-5.46 0 2.73 2.73 0 015.46 0z" />
          </svg>
          <p className='mt-[10px]'>Я специалист, ищу работу.</p>
        </div>
      )}
    </li>
  );
};