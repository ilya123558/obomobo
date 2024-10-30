import Link from 'next/link';
import React from 'react';

interface IProps {
  className?: string
}

export const PageNav: React.FC<IProps> = ({className}) => {
  const list = [
    {title: 'Resume', link: '/user/resume'}, 
    {title: 'Portfolio', link: '/user/portfolio'}, 
  ]

  return (
    <nav>
      <ul className={`flex items-center gap-[10px] ${className}`}>
        {list.map(({title, link}, index) => (
          <li key={index} className='h-[36px] select-none text-[16px] text-[#758195] will-change-transform transition-all active:scale-95 cursor-pointer rounded-[6px] bg-[#F6F6F7]'>
            <Link href={link} className='w-full h-full p-[0px_15px] flex items-center'>
              <p>{title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};