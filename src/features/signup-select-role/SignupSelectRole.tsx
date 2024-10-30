import { TRole } from '@/entities/auth/types/signup';
import { SignupQuestionnaireItem } from '@/shared/ui/signup-questionnaire-item/SignupQuestionnaireItem';
import { SignupRoleItem } from '@/shared/ui/signup-role-item/SignupRoleItem';
import React from 'react';

interface IProps {
  roleList: TRole[]
  activeRole: TRole | null
  setActiveRole: (activeRole: TRole) => void
}

export const SignupSelectRole: React.FC<IProps> = ({roleList, activeRole, setActiveRole}) => {
  return (
    <div>
      <div className="mb-[30px] font-normal text-[30px] text-center">Присоединиться <br/>как клиент или специалист</div>
      <ul className='grid gap-[20px] font-medium grid-cols-2 justify-between'>
        {roleList.map(role => (
          <SignupRoleItem
            key={role} 
            role={role} 
            isActive={role === activeRole} 
            setActiveRole={setActiveRole}
          />
        ))}
      </ul>
    </div>
  );
};