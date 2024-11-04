'use client'
import { Textarea } from '@/shared/ui/textarea/Textarea';
import React, { useState } from 'react';

export const SendCmments = () => {
  const [commentValue, setCommentValue] = useState('asdasaf')

  const handleSubmit = async () => {
    console.log('send comment')
  }

  return (
    <div className='w-full border-black border-[1px] border-opacity-[0.15] rounded-[15px] sm:p-[20px_20px_27px] p-[10px_10px_13px]'>
      <div className="sm:mb-[20px] mb-[10px] flex items-center justify-between">
        <h6 className='font-semibold sm:text-[17px] text-[12px]'>Комментарии</h6>
        <div className="flex items-center">
          <p className='mr-[10px] sm:text-[12px] text-[8px] font-normal'>Сначала новые</p>
          <button className='transition-all will-change-transform active:scale-90'>
            <svg className='sm:w-[12px] sm:h-[12px] w-[8px] h-[8px]' width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.46154 5.04167V10.5417C6.46154 10.6632 6.41291 10.7798 6.32636 10.8658C6.2398 10.9517 6.12241 11 6 11C5.87759 11 5.7602 10.9517 5.67364 10.8658C5.58709 10.7798 5.53846 10.6632 5.53846 10.5417V5.04167C5.53846 4.92011 5.58709 4.80353 5.67364 4.71758C5.7602 4.63162 5.87759 4.58333 6 4.58333C6.12241 4.58333 6.2398 4.63162 6.32636 4.71758C6.41291 4.80353 6.46154 4.92011 6.46154 5.04167ZM10.1538 9.16667C10.0314 9.16667 9.91404 9.21496 9.82749 9.30091C9.74093 9.38686 9.69231 9.50344 9.69231 9.625V10.5417C9.69231 10.6632 9.74093 10.7798 9.82749 10.8658C9.91404 10.9517 10.0314 11 10.1538 11C10.2763 11 10.3936 10.9517 10.4802 10.8658C10.5668 10.7798 10.6154 10.6632 10.6154 10.5417V9.625C10.6154 9.50344 10.5668 9.38686 10.4802 9.30091C10.3936 9.21496 10.2763 9.16667 10.1538 9.16667ZM11.5385 7.33333H10.6154V0.458333C10.6154 0.336776 10.5668 0.220197 10.4802 0.134243C10.3936 0.0482886 10.2763 0 10.1538 0C10.0314 0 9.91404 0.0482886 9.82749 0.134243C9.74093 0.220197 9.69231 0.336776 9.69231 0.458333V7.33333H8.76923C8.64682 7.33333 8.52943 7.38162 8.44287 7.46758C8.35632 7.55353 8.30769 7.67011 8.30769 7.79167C8.30769 7.91322 8.35632 8.0298 8.44287 8.11576C8.52943 8.20171 8.64682 8.25 8.76923 8.25H11.5385C11.6609 8.25 11.7783 8.20171 11.8648 8.11576C11.9514 8.0298 12 7.91322 12 7.79167C12 7.67011 11.9514 7.55353 11.8648 7.46758C11.7783 7.38162 11.6609 7.33333 11.5385 7.33333ZM1.84615 7.33333C1.72375 7.33333 1.60635 7.38162 1.5198 7.46758C1.43324 7.55353 1.38462 7.67011 1.38462 7.79167V10.5417C1.38462 10.6632 1.43324 10.7798 1.5198 10.8658C1.60635 10.9517 1.72375 11 1.84615 11C1.96856 11 2.08596 10.9517 2.17251 10.8658C2.25907 10.7798 2.30769 10.6632 2.30769 10.5417V7.79167C2.30769 7.67011 2.25907 7.55353 2.17251 7.46758C2.08596 7.38162 1.96856 7.33333 1.84615 7.33333ZM3.23077 5.5H2.30769V0.458333C2.30769 0.336776 2.25907 0.220197 2.17251 0.134243C2.08596 0.0482886 1.96856 0 1.84615 0C1.72375 0 1.60635 0.0482886 1.5198 0.134243C1.43324 0.220197 1.38462 0.336776 1.38462 0.458333V5.5H0.461538C0.339131 5.5 0.221737 5.54829 0.135181 5.63424C0.0486262 5.7202 0 5.83678 0 5.95833C0 6.07989 0.0486262 6.19647 0.135181 6.28242C0.221737 6.36838 0.339131 6.41667 0.461538 6.41667H3.23077C3.35318 6.41667 3.47057 6.36838 3.55713 6.28242C3.64368 6.19647 3.69231 6.07989 3.69231 5.95833C3.69231 5.83678 3.64368 5.7202 3.55713 5.63424C3.47057 5.54829 3.35318 5.5 3.23077 5.5ZM7.38462 2.75H6.46154V0.458333C6.46154 0.336776 6.41291 0.220197 6.32636 0.134243C6.2398 0.0482886 6.12241 0 6 0C5.87759 0 5.7602 0.0482886 5.67364 0.134243C5.58709 0.220197 5.53846 0.336776 5.53846 0.458333V2.75H4.61538C4.49298 2.75 4.37558 2.79829 4.28903 2.88424C4.20247 2.9702 4.15385 3.08678 4.15385 3.20833C4.15385 3.32989 4.20247 3.44647 4.28903 3.53242C4.37558 3.61838 4.49298 3.66667 4.61538 3.66667H7.38462C7.50702 3.66667 7.62442 3.61838 7.71097 3.53242C7.79753 3.44647 7.84615 3.32989 7.84615 3.20833C7.84615 3.08678 7.79753 2.9702 7.71097 2.88424C7.62442 2.79829 7.50702 2.75 7.38462 2.75Z" fill="black" fill-opacity="0.8"/>
            </svg>
          </button>
        </div>
      </div>
      <Textarea 
        commentValue={commentValue} 
        setCommentValue={setCommentValue} 
        handleSubmit={handleSubmit} 
      />
    </div>
  );
};




