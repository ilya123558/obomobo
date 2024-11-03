import { AnalyticsContent } from '@/widgets/analytics-content/AnalyticsContent';
import { AnalyticsTop } from '@/widgets/analytics-top/AnalyticsTop';
import React from 'react';

export default function Page() {
  return (
    <div className="w-full h-full bg-[#F2F3F5]">
      <AnalyticsTop />
      <AnalyticsContent />
    </div>
  );
};