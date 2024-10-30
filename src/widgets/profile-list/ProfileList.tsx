'use client'
import { useGetHeightContainer } from '@/shared/hooks/useGetSizeContainer';
import React, { useRef } from 'react';

const data = [
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },{
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
  {
    name: 'Taskia',
    profession: 'UI UX Designer',
    status: 'Online',
    negativeReviews: 100,
    positiveReviews: 100,
    date: '22-12-2024',
    orders: 10,
    searches: 'Ivanov'
  },
];

interface IProps {
  setActiveComponentValue: (activeComponentValue: 'chat' | 'profile' | 'profile-list') => void
}

export const ProfileList: React.FC<IProps> = ({setActiveComponentValue}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { height } = useGetHeightContainer(containerRef)

  const handleClick = () => {
    setActiveComponentValue('profile')
  }

  return (
    <div 
      ref={containerRef}
      style={{height: `${height}px`}} 
      className="md:rounded-[0px_10px_10px_0px] rounded-[10px_0px_0px_10px] bg-white transition-all scroll-hidden overflow-auto relative"
    >
      <ul
        className="flex flex-col text-black 2xl:text-[8px] xl:text-[7px] text-[6px] text-opacity-[0.7] w-full text-center"
      >
        <li className='grid grid-cols-11 items-center w-full p-[9px_15px_9px_33px] border-b-[1px] border-[#ECEEF0] bg-[#FFF5E5] will-change-scroll sticky top-[0px] z-10'>
          <div className="text-start">Имя</div>
          <div className="col-span-2">Профессия</div>
          <div className="">Статус</div>
          <div className="col-span-2">Негативные отзывы</div>
          <div className="">Дата</div>
          <div className="col-span-2">Позитивные отзывы</div>
          <div className="">Заказы</div>
          <div className="">Поиск</div>
        </li>
        {data.map((item, index, arr) => (
          <li onClick={handleClick} key={index} className={`cursor-pointer items-center select-none relative grid grid-cols-11 w-full p-[9px_15px_9px_33px] ${(index === arr.length - 1) ? '': 'border-b-[1px]'} border-[#ECEEF0]`}>
            <div className="absolute xl:left-[12px] left-[8px] top-[50%] translate-y-[-50%]">
              <svg className='xl:w-[11px] xl:h-[8px] w-[8px] h-[5px]' width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-9.15527e-05 2.78662C-9.15527e-05 2.51048 0.223766 2.28662 0.499908 2.28662H5.71207V5.71392H0.499909C0.223766 5.71392 -9.15527e-05 5.49006 -9.15527e-05 5.21392V2.78662Z" fill="#82C333"/>
                <path d="M9.99006 3.58771C10.2818 3.78626 10.2816 4.21635 9.9897 4.41464L6.28541 6.93118C5.95336 7.15676 5.50426 6.9188 5.50444 6.51738L5.50664 1.48105C5.50682 1.07962 5.95613 0.842052 6.28798 1.06792L9.99006 3.58771Z" fill="#82C333"/>
                <defs>
                <linearGradient id="paint0_linear_145_2815" x1="-9.15019e-05" y1="4.19068" x2="7.99991" y2="4.26666" gradientUnits="userSpaceOnUse">
                <stop stopColor="#7BBC22"/>
                <stop offset="1" stopColor="#70C002"/>
                </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="text-start">{item.name}</div>
            <div className="col-span-2">{item.profession}</div>
            <div className="flex items-center justify-center">
              <div className={`lg:min-w-[4px] lg:min-h-[4px] min-w-[2px] min-h-[2px] rounded-full mr-[2px] bg-green`}></div>
              <p>{item.status}</p>
            </div>
            <div className="col-span-2">{item.negativeReviews}</div>
            <div className="flex items-center text-nowrap justify-center">
              <svg className='lg:min-w-[7px] lg:min-h-[7px] min-h-[5px] min-w-[5px]' width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.5 0C2.01455 0 0.810362 1.1297 0.810362 2.52326V2.7525C0.810362 2.9794 0.738769 3.20123 0.604606 3.39003L0.205983 3.95097C-0.256668 4.60202 0.0965273 5.48696 0.901195 5.69284C1.16343 5.75993 1.42788 5.81668 1.69386 5.8631L1.69452 5.86476C1.9614 6.53282 2.6747 7 3.49998 7C4.32526 7 5.03856 6.53282 5.30544 5.86476L5.30609 5.8631C5.57209 5.81669 5.83655 5.75993 6.09881 5.69284C6.90347 5.48696 7.25667 4.60202 6.79402 3.95097L6.39539 3.39003C6.26123 3.20123 6.18964 2.9794 6.18964 2.7525V2.52326C6.18964 1.1297 4.98545 0 3.5 0ZM4.67178 5.9539C3.89337 6.04115 3.10659 6.04114 2.32817 5.95389C2.5749 6.28648 3.00406 6.51163 3.49998 6.51163C3.9959 6.51163 4.42505 6.28648 4.67178 5.9539ZM1.33094 2.52326C1.33094 1.39942 2.30206 0.488372 3.5 0.488372C4.69794 0.488372 5.66906 1.39942 5.66906 2.52326V2.7525C5.66906 3.07582 5.77108 3.39191 5.96225 3.66093L6.36087 4.22187C6.62643 4.59556 6.4237 5.1035 5.96183 5.22167C4.35004 5.63406 2.64996 5.63406 1.03817 5.22167C0.576302 5.1035 0.373574 4.59556 0.639128 4.22187L1.03775 3.66093C1.22892 3.39191 1.33094 3.07582 1.33094 2.7525V2.52326Z" fill="black"/>
              </svg>
              <p className='ml-[3px]'>{item.date}</p>
            </div>
            <div className="col-span-2">{item.positiveReviews}</div>
            <div className="">{item.orders}</div>
            <div className="">{item.searches}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};