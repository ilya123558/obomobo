import React from 'react';
import { DMNav } from '@/features/dm-nav/DMNav';
import { PageNav } from '@/features/page-nav/PageNav';
import { Search } from '@/shared/ui/search/Search';
import { Theme } from '@/features/theme/Theme';
import { ActivityFeed } from '@/features/activity-feed/ActivityFeed';
import { HeaderProfile } from '@/features/header-profile/HeaderProfile';
import Link from 'next/link';

export const BackstageControlHeader = () => {
  return (
    <header className={`sm:h-[64px] h-[45px] border-b-[2px] border-[#F5F6F7] flex items-center p-[0px_14px] justify-between `}>
      <div className="flex items-center">
        <div className="flex items-center">
          <button className="">
            <svg className='sm:w-[22px] sm:h-[19px] w-[15px] h-[12px]' width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 9.5C22 9.75194 21.9034 9.99356 21.7315 10.1717C21.5596 10.3499 21.3265 10.4499 21.0834 10.4499H3.12989L9.81561 17.3774C9.90077 17.4657 9.96833 17.5705 10.0144 17.6858C10.0605 17.8011 10.0842 17.9247 10.0842 18.0495C10.0842 18.1743 10.0605 18.2979 10.0144 18.4133C9.96833 18.5286 9.90077 18.6334 9.81561 18.7216C9.73044 18.8099 9.62934 18.8799 9.51806 18.9276C9.40679 18.9754 9.28753 19 9.16709 19C9.04665 19 8.92738 18.9754 8.81611 18.9276C8.70484 18.8799 8.60373 18.8099 8.51857 18.7216L0.268837 10.1721C0.183612 10.0839 0.116002 9.97909 0.0698724 9.86377C0.0237433 9.74845 0 9.62484 0 9.5C0 9.37516 0.0237433 9.25155 0.0698724 9.13623C0.116002 9.0209 0.183612 8.91614 0.268837 8.82791L8.51857 0.278388C8.69057 0.100139 8.92385 -1.87815e-09 9.16709 0C9.41033 1.87816e-09 9.64361 0.100139 9.81561 0.278388C9.98761 0.456636 10.0842 0.698394 10.0842 0.950475C10.0842 1.20256 9.98761 1.44431 9.81561 1.62256L3.12989 8.55005H21.0834C21.3265 8.55005 21.5596 8.65014 21.7315 8.82829C21.9034 9.00644 22 9.24806 22 9.5Z" fill="black"/>
            </svg>
          </button>
          <div className={`2xl:block hidden font-semibold text-[18px] text-green ml-[15px] text-nowrap`}>Back stage</div>
        </div>
        <Link href={'/'} className="sm:text-[18px] text-[14px] font-bold sm:ml-[15px] ml-[8px]">
          Obomobo
        </Link>
      </div>
      <div className="flex items-center gap-[10px] 2xl:ml-[20px] ml-[10px]">
        <DMNav className={'lg:block hidden'} />
        <div className={`xl:block hidden h-[26px] w-[1px] bg-[#F5F6F7] `}></div>
        <PageNav className={'xl:flex hidden'} />
      </div>
      <Search type='backstage-control' />
      <div className="flex items-center">
        <Theme />
        <ActivityFeed />
        <HeaderProfile />
      </div>
    </header>
  );
};