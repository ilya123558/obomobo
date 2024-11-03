import { DashboardInfoWrapper } from '@/shared/ui/dashboard-info-wrapper/DashboardInfoWrapper';
import React from 'react';

export const DashboardInfoList = () => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md:gap-[9px] gap-[6px]">
      <DashboardInfoWrapper title='Всего пользователей' countValue='500k' withUsersIcon />
      <DashboardInfoWrapper title='Пользователи' countValue='100K' withUsersIcon />
      <DashboardInfoWrapper title='Заказы' countValue='24' />
      <DashboardInfoWrapper title='Доход' countValue='$593' />
      <DashboardInfoWrapper title='Мой баланс' countValue='$1213' />
    </div>
  );
};