import React from 'react';

interface IProps {
  title: string
  isActive: boolean
  setActiveItem: (value: string) => void
}

export const SignupQuestionnaireItem: React.FC<IProps> = ({title, isActive, setActiveItem}) => {
  return (
    <li 
      onClick={() => setActiveItem(title)} 
      className={`h-[170px] p-[0px_30px] hover:border-green will-change-transform rounded-[20px] select-none border-[3px] ${isActive ? 'border-green' : 'border-border-gray'} flex items-center justify-center text-center cursor-pointer transition-all active:scale-95`}>
      {title}
    </li>
  );
};