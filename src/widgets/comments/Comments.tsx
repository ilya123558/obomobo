import { CommentsList } from '@/features/comments-list/CommentsList';
import { SendCmments } from '@/features/send-cmments/SendCmments';
import { Container } from '@/shared/ui/container/Container';
import React from 'react';

export const Comments = () => {
  return (
    <Container className='mt-[80px]'>
      <SendCmments />
      <CommentsList />
    </Container>
  );
};