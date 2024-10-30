import { CircularProgress } from '@mui/material';
import React from 'react';

interface IProps {
  className?: string
}

export const Loading: React.FC<IProps> = ({className}) => {
  return (
    <div className={`w-full flex items-center justify-center ${className ? className : ''}`}>
      <CircularProgress size={30} />
    </div>
  );
};