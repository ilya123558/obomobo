import React from 'react';
import { WorkspaceContainer } from '@/shared/ui/workspace-container/WorkspaceContainer';
import { CatalogTags } from '@/widgets/catalog-tags/CatalogTags';
import { CatalogList } from '@/widgets/catalog-list/CatalogList';
import { CatalogContentTop } from '@/widgets/catalog-content-top/CatalogContentTop';

export default function Page() {
  return (
    <div className="w-full h-full bg-[#F2F3F5]">
      <WorkspaceContainer className='sm:pt-[25px] pt-[15px] sm:mb-[21px] mb-[15px]'>
        <CatalogContentTop />
        <CatalogTags />
        <CatalogList />
      </WorkspaceContainer>
    </div>
  );
};

