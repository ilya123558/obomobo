'use client'
import React, { useState } from 'react';

interface IProps {
  className?: string
}

export const Theme: React.FC<IProps> = ({className}) => {
  const [value, setValue] = useState<'light' | 'night'>('light')

  const handleUpdateValue = (updateValue: 'light' | 'night') => {
    setValue(updateValue)
  } 

  return (
    <div className={`h-[36px] sm:flex hidden bg-[#F6F6F7] overflow-hidden rounded-[8px] ml-[10px] ${className}`}>
      <button onClick={() => handleUpdateValue('light')} className={`${value === 'light' ? 'bg-green' : ''} h-full w-[36px] flex items-center justify-center cursor-pointer transition-all`}>
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.42951 2.23612V0.583657C8.42951 0.43757 8.48962 0.297467 8.59661 0.194168C8.70359 0.0908695 8.8487 0.0328369 9 0.0328369C9.15131 0.0328369 9.29642 0.0908695 9.4034 0.194168C9.51039 0.297467 9.5705 0.43757 9.5705 0.583657V2.23612C9.5705 2.3822 9.51039 2.52231 9.4034 2.6256C9.29642 2.7289 9.15131 2.78694 9 2.78694C8.8487 2.78694 8.70359 2.7289 8.59661 2.6256C8.48962 2.52231 8.42951 2.3822 8.42951 2.23612ZM9 3.88857C8.09734 3.88857 7.21495 4.14701 6.46442 4.63121C5.71388 5.11541 5.12891 5.80362 4.78348 6.60882C4.43805 7.41401 4.34766 8.30002 4.52376 9.15481C4.69986 10.0096 5.13454 10.7948 5.77281 11.411C6.41109 12.0273 7.22431 12.447 8.10962 12.617C8.99494 12.787 9.9126 12.6998 10.7465 12.3663C11.5805 12.0327 12.2933 11.4679 12.7948 10.7433C13.2963 10.0186 13.5639 9.16667 13.5639 8.29513C13.5626 7.12683 13.0814 6.00675 12.2257 5.18063C11.3701 4.35452 10.21 3.88985 9 3.88857ZM4.03245 4.27828C4.13949 4.38164 4.28468 4.4397 4.43607 4.4397C4.58746 4.4397 4.73265 4.38164 4.83969 4.27828C4.94674 4.17492 5.00688 4.03474 5.00688 3.88857C5.00688 3.74241 4.94674 3.60223 4.83969 3.49887L3.69871 2.39723C3.59166 2.29387 3.44647 2.23581 3.29509 2.23581C3.1437 2.23581 2.99851 2.29387 2.89146 2.39723C2.78442 2.50059 2.72428 2.64077 2.72428 2.78694C2.72428 2.9331 2.78442 3.07328 2.89146 3.17664L4.03245 4.27828ZM4.03245 12.312L2.89146 13.4136C2.78442 13.517 2.72428 13.6572 2.72428 13.8033C2.72428 13.9495 2.78442 14.0897 2.89146 14.193C2.99851 14.2964 3.1437 14.3545 3.29509 14.3545C3.44647 14.3545 3.59166 14.2964 3.69871 14.193L4.83969 13.0914C4.8927 13.0402 4.93474 12.9795 4.96343 12.9126C4.99211 12.8457 5.00688 12.7741 5.00688 12.7017C5.00688 12.6293 4.99211 12.5576 4.96343 12.4908C4.93474 12.4239 4.8927 12.3632 4.83969 12.312C4.78669 12.2608 4.72376 12.2202 4.65451 12.1925C4.58526 12.1648 4.51103 12.1506 4.43607 12.1506C4.36111 12.1506 4.28688 12.1648 4.21763 12.1925C4.14838 12.2202 4.08545 12.2608 4.03245 12.312ZM13.5639 4.43939C13.6389 4.43945 13.7131 4.42525 13.7824 4.39761C13.8516 4.36996 13.9145 4.32941 13.9676 4.27828L15.1085 3.17664C15.2156 3.07328 15.2757 2.9331 15.2757 2.78694C15.2757 2.64077 15.2156 2.50059 15.1085 2.39723C15.0015 2.29387 14.8563 2.23581 14.7049 2.23581C14.5535 2.23581 14.4083 2.29387 14.3013 2.39723L13.1603 3.49887C13.0804 3.5759 13.026 3.67409 13.004 3.781C12.9819 3.8879 12.9932 3.99872 13.0364 4.09942C13.0797 4.20013 13.1529 4.28618 13.2468 4.3467C13.3407 4.40722 13.451 4.43948 13.5639 4.43939ZM13.9676 12.312C13.8605 12.2086 13.7153 12.1506 13.5639 12.1506C13.4125 12.1506 13.2674 12.2086 13.1603 12.312C13.0533 12.4153 12.9931 12.5555 12.9931 12.7017C12.9931 12.8479 13.0533 12.988 13.1603 13.0914L14.3013 14.193C14.3543 14.2442 14.4172 14.2848 14.4865 14.3125C14.5557 14.3402 14.63 14.3545 14.7049 14.3545C14.7799 14.3545 14.8541 14.3402 14.9234 14.3125C14.9926 14.2848 15.0555 14.2442 15.1085 14.193C15.1615 14.1419 15.2036 14.0811 15.2323 14.0142C15.261 13.9474 15.2757 13.8757 15.2757 13.8033C15.2757 13.731 15.261 13.6593 15.2323 13.5924C15.2036 13.5256 15.1615 13.4648 15.1085 13.4136L13.9676 12.312ZM3.29509 8.29513C3.29509 8.14904 3.23498 8.00894 3.12799 7.90564C3.021 7.80234 2.8759 7.74431 2.72459 7.74431H1.01312C0.861815 7.74431 0.716708 7.80234 0.60972 7.90564C0.502732 8.00894 0.442627 8.14904 0.442627 8.29513C0.442627 8.44122 0.502732 8.58132 0.60972 8.68462C0.716708 8.78792 0.861815 8.84595 1.01312 8.84595H2.72459C2.8759 8.84595 3.021 8.78792 3.12799 8.68462C3.23498 8.58132 3.29509 8.44122 3.29509 8.29513ZM9 13.8033C8.8487 13.8033 8.70359 13.8614 8.59661 13.9647C8.48962 14.068 8.42951 14.2081 8.42951 14.3541V16.0066C8.42951 16.1527 8.48962 16.2928 8.59661 16.3961C8.70359 16.4994 8.8487 16.5574 9 16.5574C9.15131 16.5574 9.29642 16.4994 9.4034 16.3961C9.51039 16.2928 9.5705 16.1527 9.5705 16.0066V14.3541C9.5705 14.2081 9.51039 14.068 9.4034 13.9647C9.29642 13.8614 9.15131 13.8033 9 13.8033ZM16.9869 7.74431H15.2754C15.1241 7.74431 14.979 7.80234 14.872 7.90564C14.765 8.00894 14.7049 8.14904 14.7049 8.29513C14.7049 8.44122 14.765 8.58132 14.872 8.68462C14.979 8.78792 15.1241 8.84595 15.2754 8.84595H16.9869C17.1382 8.84595 17.2833 8.78792 17.3903 8.68462C17.4973 8.58132 17.5574 8.44122 17.5574 8.29513C17.5574 8.14904 17.4973 8.00894 17.3903 7.90564C17.2833 7.80234 17.1382 7.74431 16.9869 7.74431Z" fill={value === 'light' ? 'white' : 'black'}/>
        </svg>
      </button>
      <button onClick={() => handleUpdateValue('night')} className={`${value === 'night' ? 'bg-green' : ''} h-full w-[36px] flex items-center justify-center cursor-pointer transition-all`}>
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8806 8.65983C12.4718 10.0638 11.6524 11.2963 10.5392 12.1821C9.56174 12.956 8.39863 13.4279 7.18038 13.545C5.96213 13.6622 4.73696 13.4198 3.64239 12.8451C2.54782 12.2704 1.62718 11.3862 0.983788 10.2916C0.3404 9.19711 -0.000265291 7.9356 3.09716e-05 6.64872C-0.00436742 5.14665 0.459819 3.68454 1.32138 2.48671C2.16338 1.31559 3.33506 0.453661 4.66967 0.0235827C4.75764 -0.00490947 4.85132 -0.00763781 4.94064 0.0156911C5.02997 0.0390201 5.11156 0.0875236 5.17664 0.155985C5.24172 0.224447 5.28783 0.310277 5.31 0.404244C5.33218 0.498211 5.32959 0.596759 5.3025 0.689292C5.01067 1.70478 4.9862 2.78454 5.2317 3.81351C5.47721 4.84247 5.98349 5.7821 6.69659 6.53225C7.4097 7.28241 8.30291 7.81499 9.28106 8.07325C10.2592 8.33151 11.2856 8.30577 12.251 7.99878C12.3389 7.97028 12.4326 7.96756 12.5219 7.99088C12.6113 8.01421 12.6928 8.06272 12.7579 8.13118C12.823 8.19964 12.8691 8.28547 12.8913 8.37944C12.9135 8.4734 12.9109 8.57195 12.8838 8.66448L12.8806 8.65983Z" fill={value === 'night' ? 'white' : 'black'}/>
        </svg>
      </button>
    </div>
  );
};