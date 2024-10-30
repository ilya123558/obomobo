import React from 'react';
import { Search } from '@/shared/ui/search/Search';
import { Theme } from '@/features/theme/Theme';
import { ActivityFeed } from '@/features/activity-feed/ActivityFeed';
import { HeaderProfile } from '@/features/header-profile/HeaderProfile';
import Link from 'next/link';
import { UserRoleHeader } from '@/features/user-role-header/UserRoleHeader';
import { ActionsPanelHeader } from '@/features/actions-panel-header/ActionsPanelHeader';

export const MainHeader = () => {
  return (
    <header className={`sm:h-[64px] h-[45px] border-b-[2px] border-[#F5F6F7] flex items-center p-[0px_14px] justify-between `}>
      <div className="flex items-center">
        <Link href={'/'} className="sm:text-[18px] text-[14px] font-bold">
          Obomobo
        </Link>
      </div>
      <Search type='main' />
        <div className="flex gap-[10px]">
          <UserRoleHeader />
          <ActionsPanelHeader />
        </div>
      <div className="flex items-center">
        <Theme />
        <ActivityFeed />
        <HeaderProfile />
      </div>
    </header>
  );
};