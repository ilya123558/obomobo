import React from 'react';

interface IProps {
  list: string[]
  byAgreement?: boolean
}

export const MiniResumeList: React.FC<IProps> = ({list, byAgreement}) => {
  return (
    <ul className='w-full flex flex-col gap-y-[7px]'>
      {list.map((item, index) => (
        <li key={index} className='flex w-full flex-col 2xl:justify-between 2xl:items-center items-start text-[10px] text-black text-opacity-70'>
          <div className="flex">
            <div className="w-[4px] h-[4px] min-w-[4px] min-h-[4px] bg-green rounded-full mr-[3px] mt-[6px]"></div>
            <p>{item}</p>
          </div>
          {byAgreement && (
            <div className="flex items-center">
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3056 4.26348C10.1205 4.07 9.92897 3.87063 9.85679 3.69531C9.79 3.53473 9.78607 3.26857 9.78214 3.01076C9.77478 2.53147 9.76692 1.98835 9.38929 1.61071C9.01165 1.23308 8.46853 1.22522 7.98924 1.21786C7.73143 1.21393 7.46527 1.21 7.30469 1.14321C7.12987 1.07103 6.93 0.879509 6.73652 0.694375C6.39768 0.368795 6.01268 0 5.5 0C4.98732 0 4.60281 0.368795 4.26348 0.694375C4.07 0.879509 3.87063 1.07103 3.69531 1.14321C3.53571 1.21 3.26857 1.21393 3.01076 1.21786C2.53147 1.22522 1.98835 1.23308 1.61071 1.61071C1.23308 1.98835 1.22768 2.53147 1.21786 3.01076C1.21393 3.26857 1.21 3.53473 1.14321 3.69531C1.07103 3.87013 0.879509 4.07 0.694375 4.26348C0.368795 4.60232 0 4.98732 0 5.5C0 6.01268 0.368795 6.39719 0.694375 6.73652C0.879509 6.93 1.07103 7.12937 1.14321 7.30469C1.21 7.46527 1.21393 7.73143 1.21786 7.98924C1.22522 8.46853 1.23308 9.01165 1.61071 9.38929C1.98835 9.76692 2.53147 9.77478 3.01076 9.78214C3.26857 9.78607 3.53473 9.79 3.69531 9.85679C3.87013 9.92897 4.07 10.1205 4.26348 10.3056C4.60232 10.6312 4.98732 11 5.5 11C6.01268 11 6.39719 10.6312 6.73652 10.3056C6.93 10.1205 7.12937 9.92897 7.30469 9.85679C7.46527 9.79 7.73143 9.78607 7.98924 9.78214C8.46853 9.77478 9.01165 9.76692 9.38929 9.38929C9.76692 9.01165 9.77478 8.46853 9.78214 7.98924C9.78607 7.73143 9.79 7.46527 9.85679 7.30469C9.92897 7.12987 10.1205 6.93 10.3056 6.73652C10.6312 6.39768 11 6.01268 11 5.5C11 4.98732 10.6312 4.60281 10.3056 4.26348ZM9.73844 6.1929C9.50321 6.43844 9.25964 6.69232 9.13049 7.00415C9.00674 7.30371 9.00134 7.64598 8.99643 7.97746C8.99152 8.32121 8.98612 8.68116 8.83339 8.83339C8.68067 8.98563 8.32317 8.99152 7.97746 8.99643C7.64598 9.00134 7.30371 9.00674 7.00415 9.13049C6.69232 9.25964 6.43844 9.50321 6.1929 9.73844C5.94737 9.97366 5.69643 10.2143 5.5 10.2143C5.30357 10.2143 5.05067 9.97268 4.8071 9.73844C4.56353 9.5042 4.30768 9.25964 3.99585 9.13049C3.69629 9.00674 3.35402 9.00134 3.02254 8.99643C2.67879 8.99152 2.31884 8.98612 2.16661 8.83339C2.01437 8.68067 2.00848 8.32317 2.00357 7.97746C1.99866 7.64598 1.99326 7.30371 1.86951 7.00415C1.74036 6.69232 1.49679 6.43844 1.26156 6.1929C1.02634 5.94737 0.785714 5.69643 0.785714 5.5C0.785714 5.30357 1.02732 5.05067 1.26156 4.8071C1.4958 4.56353 1.74036 4.30768 1.86951 3.99585C1.99326 3.69629 1.99866 3.35402 2.00357 3.02254C2.00848 2.67879 2.01388 2.31884 2.16661 2.16661C2.31933 2.01437 2.67683 2.00848 3.02254 2.00357C3.35402 1.99866 3.69629 1.99326 3.99585 1.86951C4.30768 1.74036 4.56156 1.49679 4.8071 1.26156C5.05263 1.02634 5.30357 0.785714 5.5 0.785714C5.69643 0.785714 5.94933 1.02732 6.1929 1.26156C6.43647 1.4958 6.69232 1.74036 7.00415 1.86951C7.30371 1.99326 7.64598 1.99866 7.97746 2.00357C8.32121 2.00848 8.68116 2.01388 8.83339 2.16661C8.98563 2.31933 8.99152 2.67683 8.99643 3.02254C9.00134 3.35402 9.00674 3.69629 9.13049 3.99585C9.25964 4.30768 9.50321 4.56156 9.73844 4.8071C9.97366 5.05263 10.2143 5.30357 10.2143 5.5C10.2143 5.69643 9.97268 5.94933 9.73844 6.1929ZM7.74223 4.04348C7.77876 4.07997 7.80774 4.1233 7.82751 4.17099C7.84728 4.21868 7.85745 4.2698 7.85745 4.32143C7.85745 4.37306 7.84728 4.42418 7.82751 4.47187C7.80774 4.51956 7.77876 4.56289 7.74223 4.59938L4.99223 7.34938C4.95575 7.3859 4.91242 7.41488 4.86473 7.43465C4.81703 7.45442 4.76591 7.46459 4.71429 7.46459C4.66266 7.46459 4.61154 7.45442 4.56384 7.43465C4.51615 7.41488 4.47283 7.3859 4.43634 7.34938L3.25777 6.1708C3.18405 6.09709 3.14264 5.99711 3.14264 5.89286C3.14264 5.78861 3.18405 5.68863 3.25777 5.61491C3.33148 5.54119 3.43146 5.49978 3.53571 5.49978C3.63996 5.49978 3.73994 5.54119 3.81366 5.61491L4.71429 6.51603L7.18634 4.04348C7.22282 4.00696 7.26615 3.97798 7.31384 3.95821C7.36154 3.93844 7.41266 3.92826 7.46429 3.92826C7.51591 3.92826 7.56703 3.93844 7.61473 3.95821C7.66242 3.97798 7.70575 4.00696 7.74223 4.04348Z" fill="#15950C"/>
              </svg>
              <p className='ml-[5px]'>По договорённости</p>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};