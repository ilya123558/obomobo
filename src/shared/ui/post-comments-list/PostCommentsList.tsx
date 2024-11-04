import Image from 'next/image';
import React from 'react';

interface IProps {
  postCommentsList: {
    userImg: string,
    username: string,
    dataComment: string
    comment: string
  }[]
}

export const PostCommentsList: React.FC<IProps> = ({postCommentsList}) => {


  return (
    <ul className='w-full ml-[30px] mt-[20px] flex flex-col gap-y-[25px]'>
      {postCommentsList.map(({userImg, username, dataComment, comment}, index) => (
        <li key={username + index} className=''>
          <div className="flex items-center">
            <Image src={userImg} alt='comment-img' width={36} height={36} className='rounded-full bg-[#D9D9D9] sm:w-[36px] sm:h-[36px] w-[20px] h-[20px]' />
            <h6 className='m-[0px_10px] font-medium sm:text-[17px] text-[12px]'>{username}</h6>
            <p className='sm:text-[14px] text-[8px] font-medium text-[#808080]'>{dataComment}</p>
          </div>
          <p className='font-normal sm:text-[17px] text-[12px] w-[50%] mt-[10px]'>{comment}</p>
        </li>
      ))}
    </ul>
  );
};