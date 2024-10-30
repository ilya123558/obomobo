import React from 'react';

export const ActivityFeed = () => {
  return (
    <div className='bg-[#F6F6F7] sm:h-[36px] h-[25px] flex gap-x-[10px] p-[0px_8px] items-center rounded-[6px] ml-[10px]'>
      <button>
        <svg className='sm:w-[15px] sm:h-[15px] w-[10px] h-[10px]' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.915 14.5873C13.8177 12.6146 12.1268 11.2001 10.1534 10.5295C11.1295 9.92526 11.8879 9.00449 12.3121 7.90862C12.7363 6.81276 12.8028 5.60239 12.5015 4.4634C12.2001 3.32441 11.5476 2.31978 10.6441 1.60378C9.74053 0.887776 8.63597 0.5 7.5 0.5C6.36403 0.5 5.25947 0.887776 4.35594 1.60378C3.45241 2.31978 2.79987 3.32441 2.49853 4.4634C2.1972 5.60239 2.26373 6.81276 2.6879 7.90862C3.11208 9.00449 3.87045 9.92526 4.84655 10.5295C2.87321 11.1993 1.1823 12.6138 0.0850403 14.5873C0.0448019 14.6555 0.0181121 14.7314 0.0065455 14.8106C-0.00502106 14.8897 -0.00123002 14.9704 0.0176949 15.048C0.0366199 15.1256 0.0702954 15.1984 0.116735 15.2623C0.163174 15.3261 0.221436 15.3796 0.288083 15.4196C0.354731 15.4597 0.428414 15.4854 0.504785 15.4954C0.581156 15.5053 0.658668 15.4992 0.732748 15.4775C0.806828 15.4558 0.875975 15.4189 0.936109 15.3689C0.996243 15.319 1.04615 15.257 1.08288 15.1866C2.44022 12.7472 4.83935 11.2907 7.5 11.2907C10.1607 11.2907 12.5598 12.7472 13.9171 15.1866C13.9539 15.257 14.0038 15.319 14.0639 15.3689C14.124 15.4189 14.1932 15.4558 14.2673 15.4775C14.3413 15.4992 14.4188 15.5053 14.4952 15.4954C14.5716 15.4854 14.6453 15.4597 14.7119 15.4196C14.7786 15.3796 14.8368 15.3261 14.8833 15.2623C14.9297 15.1984 14.9634 15.1256 14.9823 15.048C15.0012 14.9704 15.005 14.8897 14.9935 14.8106C14.9819 14.7314 14.9552 14.6555 14.915 14.5873ZM3.46543 5.89639C3.46543 5.06657 3.70205 4.2554 4.14538 3.56543C4.5887 2.87547 5.21882 2.33771 5.95604 2.02015C6.69326 1.7026 7.50448 1.61951 8.28711 1.7814C9.06973 1.94329 9.78862 2.34288 10.3529 2.92965C10.9171 3.51641 11.3014 4.264 11.457 5.07786C11.6127 5.89173 11.5328 6.73533 11.2275 7.50197C10.9221 8.26862 10.405 8.92388 9.74149 9.3849C9.078 9.84592 8.29796 10.092 7.5 10.092C6.43032 10.0908 5.40477 9.64838 4.64839 8.86181C3.89201 8.07524 3.46658 7.00876 3.46543 5.89639Z" fill="#758195"/>
        </svg>
      </button>

      <button className=''>
        <svg className='sm:w-[15px] sm:h-[15px] w-[10px] h-[10px]' width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.43243 0.5L10.0559 0.5C10.8896 0.499994 11.5525 0.49999 12.0842 0.550542C12.6293 0.602375 13.0903 0.711026 13.5009 0.962644C13.9233 1.22152 14.2785 1.5767 14.5374 1.99914C14.789 2.40974 14.8976 2.87067 14.9495 3.41582C15 3.94749 15 4.61043 15 5.44409V6.01321C15 6.60663 15 7.07862 14.9739 7.46134C14.9472 7.85284 14.8914 8.18902 14.761 8.5038C14.4424 9.27308 13.8312 9.88427 13.0619 10.2029C12.7974 10.3125 12.5154 10.37 12.196 10.4013C12.1923 10.4985 12.1876 10.5909 12.1816 10.6789C12.1532 11.0947 12.0941 11.449 11.9571 11.7799C11.6207 12.5919 10.9756 13.237 10.1636 13.5734C9.74715 13.7458 9.28784 13.7964 8.71023 13.8148C8.39946 13.8248 8.2008 13.8316 8.04989 13.85C7.90722 13.8674 7.85368 13.8907 7.82474 13.9078C7.79257 13.9268 7.74818 13.9617 7.67076 14.0683C7.58713 14.1835 7.49245 14.3424 7.34246 14.5958L7.16146 14.9016C6.68918 15.6995 5.52013 15.6995 5.04785 14.9016L4.86685 14.5958C4.71686 14.3424 4.62218 14.1835 4.53855 14.0683C4.46113 13.9617 4.41673 13.9268 4.38457 13.9078C4.35563 13.8907 4.30209 13.8674 4.15942 13.85C4.00851 13.8316 3.80985 13.8248 3.49908 13.8148C2.92148 13.7964 2.46218 13.7458 2.04576 13.5734C1.23375 13.237 0.588607 12.5919 0.25226 11.7799C0.115234 11.449 0.0561391 11.0947 0.0277676 10.6789C-4.83682e-06 10.2718 -2.67562e-06 9.76938 1.10558e-07 9.1354L1.10558e-07 8.53116C-5.37863e-06 7.64052 -9.66325e-06 6.93478 0.0537542 6.36933C0.108801 5.79038 0.223877 5.3047 0.488345 4.87312C0.761599 4.42721 1.13651 4.0523 1.58242 3.77904C2.01399 3.51457 2.49968 3.3995 3.07863 3.34445C3.2258 3.33046 3.38247 3.32011 3.54944 3.31245C3.60527 2.81024 3.71658 2.38166 3.95099 1.99914C4.20986 1.5767 4.56504 1.22152 4.98748 0.962644C5.39808 0.711026 5.85901 0.602375 6.40416 0.550542C6.93584 0.49999 7.59877 0.499994 8.43243 0.5ZM4.60697 3.29153C4.80706 3.2907 5.01799 3.2907 5.24045 3.2907H6.96888C7.85951 3.29069 8.56525 3.29069 9.13071 3.34445C9.70965 3.3995 10.1953 3.51457 10.6269 3.77904C11.0728 4.0523 11.4477 4.42721 11.721 4.87312C11.9855 5.3047 12.1005 5.79038 12.1556 6.36933C12.2093 6.93478 12.2093 7.64052 12.2093 8.53115V9.13541C12.2093 9.20749 12.2093 9.27788 12.2093 9.34662C12.4014 9.32169 12.5416 9.2857 12.6614 9.23606C13.1743 9.02363 13.5817 8.61617 13.7942 8.10332C13.8629 7.93731 13.9067 7.72832 13.9298 7.39011C13.9532 7.04719 13.9535 6.61089 13.9535 5.99421V5.47095C13.9535 4.60439 13.9529 3.99122 13.9076 3.51488C13.8631 3.04633 13.779 2.76447 13.6451 2.54594C13.4725 2.26431 13.2357 2.02752 12.9541 1.85494C12.7355 1.72102 12.4537 1.6369 11.9851 1.59235C11.5088 1.54706 10.8956 1.54651 10.0291 1.54651H8.45929C7.59273 1.54651 6.97956 1.54706 6.50322 1.59235C6.03467 1.6369 5.75282 1.72102 5.53428 1.85494C5.25265 2.02752 5.01587 2.26431 4.84329 2.54594C4.73127 2.72874 4.6551 2.95363 4.60697 3.29153ZM3.17768 4.38627C2.67534 4.43403 2.36873 4.52457 2.12922 4.67134C1.82413 4.8583 1.56761 5.11482 1.38065 5.41992C1.23388 5.65943 1.14333 5.96604 1.09557 6.46838C1.04707 6.97851 1.04651 7.63451 1.04651 8.55816V9.1163C1.04651 9.77361 1.0468 10.2404 1.07185 10.6076C1.09659 10.9702 1.14371 11.1973 1.21911 11.3794C1.44925 11.935 1.89066 12.3764 2.44625 12.6065C2.6794 12.7031 2.97979 12.7512 3.53253 12.7689L3.55423 12.7696C3.83707 12.7786 4.08308 12.7865 4.28613 12.8112C4.5026 12.8376 4.71527 12.8875 4.91737 13.0071C5.11625 13.1247 5.2599 13.2807 5.38528 13.4533C5.50127 13.613 5.62078 13.8149 5.75626 14.0439L5.94843 14.3685C5.98011 14.422 6.03542 14.4535 6.10465 14.4535C6.17389 14.4535 6.2292 14.422 6.26088 14.3685L6.45306 14.0438C6.58853 13.8149 6.70804 13.613 6.82403 13.4533C6.94941 13.2807 7.09306 13.1247 7.29194 13.0071C7.49404 12.8875 7.70671 12.8376 7.92318 12.8112C8.12623 12.7865 8.37224 12.7786 8.65508 12.7696L8.67678 12.7689C9.22954 12.7512 9.52993 12.7031 9.76308 12.6065C10.3187 12.3764 10.7601 11.935 10.9902 11.3794C11.0656 11.1973 11.1127 10.9702 11.1375 10.6076C11.1625 10.2404 11.1628 9.77361 11.1628 9.1163V8.55816C11.1628 7.63451 11.1623 6.97851 11.1138 6.46838C11.066 5.96604 10.9755 5.65943 10.8287 5.41992C10.6417 5.11482 10.3852 4.8583 10.0801 4.67134C9.8406 4.52457 9.53399 4.43403 9.03165 4.38627C8.52152 4.33776 7.86553 4.33721 6.94188 4.33721H5.26746C4.34381 4.33721 3.68781 4.33776 3.17768 4.38627Z" fill="#758195"/>
          <path d="M4.36048 8.69767C4.36048 9.08299 4.04812 9.39535 3.6628 9.39535C3.27748 9.39535 2.96512 9.08299 2.96512 8.69767C2.96512 8.31236 3.27748 8 3.6628 8C4.04812 8 4.36048 8.31236 4.36048 8.69767Z" fill="#758195"/>
          <path d="M6.80234 8.69767C6.80234 9.08299 6.48998 9.39535 6.10467 9.39535C5.71935 9.39535 5.40699 9.08299 5.40699 8.69767C5.40699 8.31236 5.71935 8 6.10467 8C6.48998 8 6.80234 8.31236 6.80234 8.69767Z" fill="#758195"/>
          <path d="M9.24421 8.69767C9.24421 9.08299 8.93185 9.39535 8.54653 9.39535C8.16122 9.39535 7.84886 9.08299 7.84886 8.69767C7.84886 8.31236 8.16122 8 8.54653 8C8.93185 8 9.24421 8.31236 9.24421 8.69767Z" fill="#758195"/>
        </svg>
      </button>

      <button className=''>
        <svg className='sm:w-[15px] sm:h-[15px] w-[10px] h-[10px]' width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.72333 0.5C3.86986 0.5 1.55667 2.8132 1.55667 5.66667V6.13607C1.55667 6.60068 1.41914 7.0549 1.16142 7.44148L0.395684 8.59009C-0.493047 9.92318 0.185424 11.7352 1.73115 12.1568C2.23489 12.2941 2.74289 12.4104 3.25383 12.5054L3.25509 12.5088C3.76776 13.8767 5.13796 14.8333 6.72329 14.8333C8.30862 14.8333 9.67883 13.8767 10.1915 12.5088L10.1927 12.5054C10.7037 12.4104 11.2117 12.2942 11.7155 12.1568C13.2612 11.7352 13.9397 9.92318 13.051 8.59009L12.2852 7.44148C12.0275 7.0549 11.89 6.60068 11.89 6.13607V5.66667C11.89 2.8132 9.57681 0.5 6.72333 0.5ZM8.97427 12.6913C7.47897 12.87 5.9676 12.87 4.4723 12.6913C4.94627 13.3723 5.77065 13.8333 6.72329 13.8333C7.67593 13.8333 8.5003 13.3723 8.97427 12.6913ZM2.55667 5.66667C2.55667 3.36548 4.42215 1.5 6.72333 1.5C9.02452 1.5 10.89 3.36548 10.89 5.66667V6.13607C10.89 6.79811 11.086 7.44533 11.4532 7.99618L12.2189 9.14479C12.729 9.90996 12.3396 10.95 11.4524 11.192C8.35623 12.0364 5.09044 12.0364 1.99427 11.192C1.10705 10.95 0.717618 9.90996 1.22773 9.14479L1.99347 7.99618C2.3607 7.44533 2.55667 6.79811 2.55667 6.13607V5.66667Z" fill="#758195"/>
        </svg>
      </button>
    </div>
  );
};