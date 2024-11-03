'use client'
import { Button } from '@/shared/ui/button/Button';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';

interface IProps {
  title: string
  className?: string
}

export const WorkspaceTitle: React.FC<PropsWithChildren<IProps>> = ({children, title, className}) => {
  return (
    <div className={`flex justify-between items-center font-[500] lg:text-[28px] sm:text-[22px] text-[18px] ${className ? className : ''}`}>
      <h4>{title}</h4>
      {children}
      <div className="flex items-center sm:gap-x-[25px] gap-x-[10px]">
        <Button handleClick={() => {}}>
          <svg className='sm:w-[18px] sm:h-[20px] w-[14px] h-[16px]' width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.748 18.75C12.748 18.9489 12.669 19.1397 12.5283 19.2803C12.3877 19.421 12.1969 19.5 11.998 19.5H5.99798C5.79906 19.5 5.6083 19.421 5.46765 19.2803C5.32699 19.1397 5.24798 18.9489 5.24798 18.75C5.24798 18.5511 5.32699 18.3603 5.46765 18.2197C5.6083 18.079 5.79906 18 5.99798 18H11.998C12.1969 18 12.3877 18.079 12.5283 18.2197C12.669 18.3603 12.748 18.5511 12.748 18.75ZM17.7964 15.75C17.6663 15.9792 17.4774 16.1696 17.2491 16.3014C17.0209 16.4333 16.7616 16.5018 16.498 16.5H1.49798C1.23429 16.4996 0.97536 16.4298 0.747279 16.2975C0.519198 16.1651 0.330028 15.975 0.198835 15.7463C0.0676423 15.5176 -0.000936882 15.2583 9.66719e-06 14.9946C0.000956216 14.7309 0.0713951 14.4722 0.204227 14.2444C0.724539 13.3481 1.49798 10.8131 1.49798 7.5C1.49798 5.51088 2.28815 3.60322 3.69468 2.1967C5.1012 0.790176 7.00885 0 8.99798 0C10.9871 0 12.8948 0.790176 14.3013 2.1967C15.7078 3.60322 16.498 5.51088 16.498 7.5C16.498 10.8122 17.2724 13.3481 17.7927 14.2444C17.9268 14.4725 17.9978 14.7322 17.9983 14.9968C17.9988 15.2614 17.9288 15.5214 17.7955 15.75H17.7964ZM16.498 15C15.7733 13.7559 14.998 10.8797 14.998 7.5C14.998 5.9087 14.3658 4.38258 13.2406 3.25736C12.1154 2.13214 10.5893 1.5 8.99798 1.5C7.40668 1.5 5.88055 2.13214 4.75534 3.25736C3.63012 4.38258 2.99798 5.9087 2.99798 7.5C2.99798 10.8806 2.22173 13.7569 1.49798 15H16.498Z" fill="black"/>
          </svg>
        </Button>
        <Image src={'/workspace/user-img.png'} alt='user-img' width={40} height={40} quality={100} className='rounded-full sm:min-w-[40px] sm:min-h-[40px] min-w-[20px] min-h-[20px] sm:h-[40px] sm:w-[40px] h-[20px] w-[20px]' />
      </div>
    </div>
  );
};