'use client'
import React, { useState } from 'react';
import { ClientStaffMemberFrom } from '@/entities/client/ui/client-staff-member-form/ClientStaffMemberFrom';
import { SignupQuestionnaireItem } from '@/shared/ui/signup-questionnaire-item/SignupQuestionnaireItem';
import { clientList } from './const';

interface IProps {
  handlePrev: () => void
}

export const SignupQuestionnaireClient: React.FC<IProps> = ({handlePrev}) => {
  const [activeItem, setActiveItem] = useState('')
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div>
      {isSelected 
        ? (
          <>
            {activeItem === 'Постоянного сотрудника себе в штат' && <ClientStaffMemberFrom handlePrev={() => {setIsSelected(false)}} />}
          </>
        )
        : (
          <>
            <div className="mb-[30px] font-semibold text-[30px] text-center">Кого вы ищете?</div>
            <ul className='grid gap-[20px] font-medium grid-cols-2 justify-between'>
              {clientList.map(({title}) => (
                <SignupQuestionnaireItem 
                  key={title} 
                  title={title} 
                  isActive={title === activeItem} 
                  setActiveItem={setActiveItem}
                />
              ))}
            </ul>
            <div className="w-full flex justify-end mt-[30px]">
              <button onClick={handlePrev} className="mr-[20px] active:scale-90 transition-all">Назад</button>
              <button 
                onClick={() => setIsSelected(true)}
                disabled={activeItem === ''} 
                className={`p-[10px_20px] bg-green rounded-[10px] active:scale-90 transition-all text-white ${activeItem === '' ? 'opacity-30': ''}`}
              >
                Далее
              </button>
            </div>
          </>
        )
      }
    </div>
  );
};