import React, { PropsWithChildren } from 'react';

interface IProps {
  className?: string
}

export const WorkspaceContainer: React.FC<PropsWithChildren<IProps>> = ({children, className}) => {
  return (
    <div className={`sm:m-[0px_30px] m-[0px_10px] ${className ? className : ''}`}>
      {children}
    </div>
  );
};