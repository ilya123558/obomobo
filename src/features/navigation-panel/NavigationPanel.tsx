'use client'
import { MenuButtonWrapper } from '@/shared/ui/menu-button-wrapper/MenuButtonWrapper';
import { useRouter, usePathname } from 'next/navigation';
import React from 'react';

export const NavigationPanel = () => {
  const router = useRouter()
  const pathname = usePathname()

  const navigationList = [
    {link: '/workspace/dashboard', svgElement: (
      <svg className='sm:w-[20px] sm:h-[22px] w-[16px] h-[18px]' width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5114 9.31496L11.1781 0.515078C10.8656 0.185267 10.4418 0 10 0C9.55816 0 9.13441 0.185267 8.82188 0.515078L0.488551 9.31496C0.333035 9.47797 0.209759 9.67199 0.125889 9.88576C0.0420193 10.0995 -0.000769433 10.3288 1.04724e-05 10.5601V21.12C1.04724e-05 21.3534 0.0878079 21.5772 0.244088 21.7423C0.400368 21.9073 0.612329 22 0.833343 22H7.5C7.72102 22 7.93298 21.9073 8.08926 21.7423C8.24554 21.5772 8.33333 21.3534 8.33333 21.12V14.9601H11.6667V21.12C11.6667 21.3534 11.7545 21.5772 11.9107 21.7423C12.067 21.9073 12.279 22 12.5 22H19.1667C19.3877 22 19.5996 21.9073 19.7559 21.7423C19.9122 21.5772 20 21.3534 20 21.12V10.5601C20.0008 10.3288 19.958 10.0995 19.8741 9.88576C19.7902 9.67199 19.667 9.47797 19.5114 9.31496ZM18.3333 20.24H13.3333V14.0801C13.3333 13.8467 13.2455 13.6229 13.0893 13.4579C12.933 13.2928 12.721 13.2001 12.5 13.2001H7.5C7.27899 13.2001 7.06703 13.2928 6.91075 13.4579C6.75447 13.6229 6.66667 13.8467 6.66667 14.0801V20.24H1.66668V10.5601L10 1.76026L18.3333 10.5601V20.24Z" fill="#000000"/>
      </svg>
    )},
    {link: '/workspace/schedule', svgElement: (
      <svg className='sm:w-[21px] sm:h-[21px] w-[18px] h-[18px]' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10.5C21 10.7321 20.9078 10.9546 20.7437 11.1187C20.5796 11.2828 20.3571 11.375 20.125 11.375H11.375V20.125C11.375 20.3571 11.2828 20.5796 11.1187 20.7437C10.9546 20.9078 10.7321 21 10.5 21C10.2679 21 10.0454 20.9078 9.88128 20.7437C9.71719 20.5796 9.625 20.3571 9.625 20.125V11.375H0.875C0.642936 11.375 0.420376 11.2828 0.256282 11.1187C0.0921874 10.9546 0 10.7321 0 10.5C0 10.2679 0.0921874 10.0454 0.256282 9.88128C0.420376 9.71719 0.642936 9.625 0.875 9.625H9.625V0.875C9.625 0.642936 9.71719 0.420376 9.88128 0.256282C10.0454 0.0921874 10.2679 0 10.5 0C10.7321 0 10.9546 0.0921874 11.1187 0.256282C11.2828 0.420376 11.375 0.642936 11.375 0.875V9.625H20.125C20.3571 9.625 20.5796 9.71719 20.7437 9.88128C20.9078 10.0454 21 10.2679 21 10.5Z" fill="black"/>
      </svg>
    )},
    {link: '/workspace/analytics', svgElement: (
      <svg className='sm:w-[27px] sm:h-[18px] w-[22px] h-[15px]' width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.0295 3.86886C21.7796 2.63805 20.294 1.66252 18.6584 0.998516C17.0228 0.334511 15.2697 -0.004833 13.5 5.19998e-05H13.4518C6.03521 0.0249203 0 6.03951 0 13.397V16.1053C0 16.6078 0.203188 17.0897 0.564864 17.445C0.926541 17.8004 1.41708 18 1.92857 18H25.0714C25.5829 18 26.0734 17.8004 26.4351 17.445C26.7968 17.0897 26.9999 16.6078 26.9999 16.1053V13.2632C27.0049 11.5169 26.6564 9.78711 25.9748 8.17436C25.2932 6.5616 24.292 5.09806 23.0295 3.86886ZM25.0714 16.1053H12.5007L19.1013 7.18819C19.2518 6.98498 19.3141 6.73134 19.2743 6.48305C19.2345 6.23476 19.0959 6.01217 18.8891 5.86424C18.6823 5.71632 18.4241 5.65517 18.1714 5.69426C17.9187 5.73334 17.6921 5.86946 17.5415 6.07267L10.1153 16.1053H1.92857V13.397C1.92857 13.0323 1.94665 12.6723 1.9804 12.3158H4.82142C5.07716 12.3158 5.32243 12.216 5.50327 12.0383C5.68411 11.8607 5.7857 11.6197 5.7857 11.3684C5.7857 11.1172 5.68411 10.8762 5.50327 10.6986C5.32243 10.5209 5.07716 10.4211 4.82142 10.4211H2.32272C3.56665 5.81925 7.62628 2.34005 12.5357 1.93505V4.73688C12.5357 4.98814 12.6373 5.2291 12.8181 5.40677C12.999 5.58443 13.2442 5.68425 13.5 5.68425C13.7557 5.68425 14.001 5.58443 14.1818 5.40677C14.3627 5.2291 14.4643 4.98814 14.4643 4.73688V1.93386C16.8565 2.13165 19.1271 3.05448 20.9625 4.57483C22.7978 6.09519 24.1072 8.13803 24.7098 10.4211H22.1785C21.9228 10.4211 21.6775 10.5209 21.4967 10.6986C21.3158 10.8762 21.2142 11.1172 21.2142 11.3684C21.2142 11.6197 21.3158 11.8607 21.4967 12.0383C21.6775 12.216 21.9228 12.3158 22.1785 12.3158H25.0316C25.0569 12.6296 25.0714 12.9446 25.0714 13.2632V16.1053Z" fill="black"/>
      </svg>
    )},
    {link: '/workspace/catalog', svgElement: (
      <svg className='sm:w-[23px] sm:h-[23px] w-[17px] h-[17px]' width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.4143 10.5272L21.8945 10.9927C21.7295 11.1403 21.5146 11.2138 21.2972 11.1971C21.0799 11.1804 20.8778 11.0749 20.7354 10.9037C20.5931 10.7325 20.5222 10.5097 20.5383 10.2843C20.5544 10.0589 20.6561 9.84936 20.8212 9.70177L21.3409 9.23632C21.3533 9.22567 21.3646 9.21609 21.3543 9.18307C21.344 9.15005 21.3358 9.15431 21.3194 9.15218L20.4699 9.08082C20.36 9.07519 20.2523 9.04671 20.1531 8.99707C20.054 8.94743 19.9655 8.87764 19.8929 8.79185C19.8203 8.70606 19.7651 8.60601 19.7304 8.49765C19.6958 8.38929 19.6826 8.27483 19.6915 8.16105C19.7003 8.04728 19.7312 7.93651 19.7821 7.83533C19.8331 7.73415 19.9031 7.64462 19.9881 7.57205C20.0731 7.49949 20.1712 7.44537 20.2768 7.4129C20.3823 7.38044 20.4931 7.37029 20.6024 7.38306L21.4519 7.45336C21.7834 7.48244 22.0994 7.61234 22.3601 7.82679C22.6207 8.04123 22.8146 8.33069 22.9174 8.65889C23.0201 8.98709 23.0272 9.33943 22.9377 9.67178C22.8482 10.0041 22.6661 10.3017 22.4143 10.5272ZM16.076 14.5522L16.495 16.3863C16.5376 16.5729 16.6396 16.7393 16.7846 16.8583C16.9296 16.9774 17.1092 17.0422 17.2941 17.0424C17.3581 17.0424 17.4219 17.0345 17.4841 17.0189C17.5891 16.9931 17.6882 16.9462 17.7757 16.8806C17.8632 16.8151 17.9374 16.7324 17.9941 16.6371C18.0507 16.5419 18.0887 16.436 18.1059 16.3255C18.1231 16.2151 18.1191 16.1021 18.0942 15.9933L17.7861 14.663L18.6078 13.9323C18.7729 13.7847 18.8746 13.5752 18.8907 13.3498C18.9068 13.1243 18.8359 12.9015 18.6936 12.7304C18.6231 12.6456 18.5372 12.5761 18.4408 12.5257C18.3444 12.4754 18.2394 12.4452 18.1318 12.437C17.9144 12.4203 17.6995 12.4938 17.5345 12.6414L16.3389 13.7065C16.2243 13.8087 16.1391 13.9418 16.0927 14.091C16.0463 14.2402 16.0405 14.3998 16.076 14.5522ZM19.0679 20.2536C19.0177 20.0337 18.8852 19.8435 18.6997 19.7249C18.5142 19.6062 18.2909 19.5688 18.0788 19.621C17.8668 19.6731 17.6833 19.8104 17.5689 20.0028C17.4545 20.1951 17.4185 20.4267 17.4687 20.6466L17.6043 21.241C17.6083 21.2502 17.6087 21.2606 17.6054 21.2701C17.6022 21.2796 17.5955 21.2875 17.5868 21.2921C17.5684 21.307 17.5632 21.3038 17.5478 21.2921L16.8576 20.8522C16.672 20.7338 16.4486 20.6968 16.2366 20.7492C16.0246 20.8017 15.8414 20.9393 15.7273 21.1318C15.6131 21.3243 15.5774 21.5559 15.628 21.7758C15.6785 21.9956 15.8112 22.1856 15.9969 22.3039L16.6871 22.7438C16.971 22.9226 17.2996 23.0103 17.6314 22.996C17.9633 22.9817 18.2837 22.8659 18.5523 22.6633C18.8209 22.4607 19.0257 22.1803 19.141 21.8573C19.2564 21.5343 19.277 21.1831 19.2004 20.8479L19.0679 20.2536ZM16.3615 8.73786L14.7551 8.60259C14.6048 8.58939 14.4608 8.5335 14.3391 8.44107C14.2173 8.34863 14.1225 8.22321 14.0649 8.07857L12.3188 3.70317V17.9594L13.082 18.4462C13.1739 18.5048 13.2538 18.5816 13.3171 18.6722C13.3804 18.7628 13.4258 18.8655 13.4509 18.9743C13.4759 19.0832 13.48 19.1961 13.463 19.3066C13.4459 19.417 13.4081 19.523 13.3516 19.6183C13.2951 19.7136 13.221 19.7965 13.1336 19.8621C13.0462 19.9277 12.9472 19.9749 12.8422 20.0008C12.7373 20.0268 12.6284 20.0311 12.5219 20.0134C12.4153 19.9957 12.3132 19.9565 12.2212 19.8979L11.4971 19.4356L6.30715 22.7459C6.02308 22.925 5.69428 23.0128 5.36215 22.9985C5.03002 22.9841 4.70941 22.8682 4.44069 22.6653C4.17197 22.4623 3.96717 22.1815 3.85206 21.8581C3.73695 21.5347 3.71668 21.1833 3.79382 20.8479L5.20712 14.663L0.585131 10.5272C0.333795 10.302 0.152025 10.0049 0.0625202 9.67317C-0.0269845 9.34142 -0.0202567 8.98969 0.0818633 8.66189C0.183983 8.33408 0.37697 8.04474 0.636721 7.83C0.896473 7.61526 1.21148 7.48463 1.5424 7.45443L7.60233 6.94744L9.94003 1.08092C10.0666 0.761198 10.2819 0.487715 10.5587 0.295242C10.8355 0.102769 11.1613 0 11.4946 0C11.8278 0 12.1536 0.102769 12.4304 0.295242C12.7072 0.487715 12.9226 0.761198 13.0491 1.08092L15.3858 6.94744L16.4909 7.0401C16.5988 7.04913 16.704 7.0801 16.8003 7.13125C16.8967 7.18241 16.9824 7.25275 17.0525 7.33825C17.1227 7.42375 17.1759 7.52274 17.2092 7.62957C17.2424 7.7364 17.2551 7.84898 17.2464 7.96088C17.2377 8.07277 17.2078 8.1818 17.1585 8.28172C17.1091 8.38165 17.0413 8.47052 16.9588 8.54326C16.8764 8.616 16.7809 8.67119 16.6779 8.70568C16.5749 8.74017 16.4663 8.75327 16.3584 8.74425L16.3615 8.73786ZM10.6754 17.9594V3.70317L8.92935 8.07857C8.87156 8.22367 8.77623 8.34939 8.65389 8.44186C8.53155 8.53433 8.38696 8.58995 8.23606 8.60259L1.67078 9.15218C1.65538 9.15218 1.64613 9.15218 1.63689 9.18307C1.63217 9.19222 1.63093 9.20286 1.6334 9.21292C1.63587 9.22297 1.64188 9.2317 1.65024 9.23739L6.65226 13.7108C6.76633 13.8127 6.85118 13.9452 6.89755 14.0938C6.94393 14.2424 6.95003 14.4013 6.9152 14.5533L5.38686 21.242C5.38291 21.2512 5.38251 21.2617 5.38576 21.2712C5.38901 21.2807 5.39565 21.2886 5.40432 21.2932C5.42281 21.3081 5.42794 21.3049 5.44335 21.2932L10.6754 17.9594Z" fill="black"/>
      </svg>
    )},
    {link: '/workspace/settings', svgElement: (
      <svg className='sm:w-[24px] sm:h-[24px] w-[18px] h-[18px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M21.2856 9.6H24V14.4H21.2868C20.9976 15.5172 20.52 16.5576 19.878 17.4768L21.6 19.2L19.2 21.6L17.478 19.8768C16.5564 20.5188 15.5184 20.9976 14.4 21.2856V24H9.6V21.2856C8.4828 20.9976 7.4436 20.5188 6.5232 19.8768L4.8 21.6L2.4 19.2L4.1232 17.4768C3.4812 16.5588 3.0024 15.5184 2.7144 14.4H0V9.6H2.7144C3.0024 8.4816 3.48 7.4424 4.1232 6.5232L2.4 4.8L4.8 2.4L6.5232 4.1232C7.4424 3.48 8.4816 3.0024 9.6 2.7144V0H14.4V2.7132C15.5184 3.0024 16.5564 3.48 17.478 4.122L19.2 2.3988L21.6 4.7988L19.8768 6.5232C20.5188 7.4424 20.9976 8.4828 21.2856 9.6ZM12 16.8C14.6509 16.8 16.8 14.6509 16.8 12C16.8 9.34903 14.6509 7.2 12 7.2C9.34903 7.2 7.2 9.34903 7.2 12C7.2 14.6509 9.34903 16.8 12 16.8Z" fill="black"/>
      </svg>
    )},
  ]

  const handleRedirect = (link: string) => {
    router.push(link)
  }

  return (
    <div className="min-w-[106px] sm:h-full bg-[#E3E5E8] flex sm:flex-col flex-row sm:items-end items-center sm:justify-start justify-center gap-[15px] sm:p-[38px_25px_0px_0px] p-[10px_0px]">
      {navigationList.map(({link, svgElement}, index) => (
        <MenuButtonWrapper key={index} handleClick={() => handleRedirect(link)} active={pathname === link}>
          {svgElement}
        </MenuButtonWrapper>
      ))}
    </div>
  );
};