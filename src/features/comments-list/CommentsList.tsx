import { CommentsItem } from '@/entities/comment/ui/comments-item/CommentsItem';
import React from 'react';

export const CommentsList = () => {
  return (
    <div className='mt-[55px] w-full'>
      <ul className='w-full flex flex-col gap-y-[30px]'>
        <CommentsItem />
      </ul>
    </div>
  );
};