'use client'
import React, { useState } from 'react';
import { secondList, roleList } from './const';
import { TRole } from '@/entities/auth/types/signup';
import { SignupSelectRole } from '@/features/signup-select-role/SignupSelectRole';
import Link from 'next/link';
import { SignupQuestionnaireClient } from '@/widgets/signup-questionnaire-client/SignupQuestionnaireClient';

interface IProps {
  role: TRole | null
  setRole: (role: TRole) => void
}

export const SignupQuestionnaire: React.FC<IProps> = ({role, setRole}) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className='w-full flex items-center flex-col mt-[100px]'>
      <div className="w-[800px]">
        {isSelected
          ? (
            <>
              {role === 'client' && <SignupQuestionnaireClient handlePrev={() => setIsSelected(false)} />}
              {/* {role === 'specialist' && <SignupQuestionnaireSpecialist/>} */}
            </>
          )
          : (
            <>
              <SignupSelectRole
                roleList={roleList}
                activeRole={role} 
                setActiveRole={setRole} 
              />
              <div className="flex items-center justify-center mt-[45px]">
                <button onClick={() => setIsSelected(true)} className={`p-[10px_20px] bg-green rounded-[15px] font-semibold text-[17px] active:scale-95 will-change-transform transition-all text-white`}>
                  Присоединиться как {role === 'client' && 'клиент'} {role === 'specialist' && 'специалист'}
                </button>
              </div>
              <p className='text-[16px] font-light mt-[20px] text-center'>Уже есть аккаунт? <Link className='text-green underline font-normal ml-[5px]' href={'/login'}>Войти</Link></p>
            </>
          )
        }
        {/* {isOther 
          ? (
            <SignupQuestionnaireList 
            list={secondList}
            activeItem={secondActiveItem} 
            setActiveItem={setSecondActiveItem} 
            text={'Или вы'}
            />
          )
          : (
            <SignupQuestionnaireList 
              list={firstList}
              activeItem={firstActiveItem} 
              setActiveItem={setFirstActiveItem} 
              text={'Вы ищете кого?'}
            />
          )
        }
        <div className="w-full flex justify-end mt-[30px]">
          {isOther
            ? (
              <div className="flex items-center">
                <button onClick={() => handleOther(false)} className="mr-[20px] active:scale-90 transition-all">Назад</button>
                <button onClick={handleNext} disabled={secondActiveItem === ''} className={`p-[10px_20px] bg-green rounded-[10px] active:scale-90 transition-all text-white ${secondActiveItem === '' ? 'opacity-30': ''}`}>Далее</button>
              </div>
            )
            : (
              <div className="flex items-center">
                <button onClick={() => handleOther(true)} className="mr-[20px] active:scale-90 transition-all">Другое</button>
                <button onClick={handleNext} disabled={firstActiveItem === ''} className={`p-[10px_20px] bg-green rounded-[10px] active:scale-90 transition-all text-white ${firstActiveItem === '' ? 'opacity-30': ''}`}>Далее</button>
              </div>
            )
          }
        </div> */}
      </div>
    </div>
  );
};