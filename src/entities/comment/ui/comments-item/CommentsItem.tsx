'use client'
import { PostCommentsList } from '@/shared/ui/post-comments-list/PostCommentsList';
import { Textarea } from '@/shared/ui/textarea/Textarea';
import Image from 'next/image';
import React, { useState } from 'react';

const postCommentsList = [
  {userImg: '/user/resume/comment-img.png', username: 'Sunju malrn', dataComment: '1 час назад', comment: 'comment'},
  {userImg: '/user/resume/comment-img.png', username: 'Sunju malrn', dataComment: '1 час назад', comment: 'comment'},
  {userImg: '/user/resume/comment-img.png', username: 'Sunju malrn', dataComment: '1 час назад', comment: 'comment'}
]

export const CommentsItem = () => {
  const [editComment, setEditComment] = useState(false)
  const [like, setLike] = useState(false)
  const [commentValue, setCommentValue] = useState('comment')
  const [openPostCommentsList, setOpenPostCommentsList] = useState(false)

  const handleLike = () => {
    setLike(!like)
  }

  const handleEditComment = () => {
    setEditComment(!editComment)
  }

  const handleSubmit = async () => {
    console.log('send comment')
  }

  return (
    <li className='w-full'>
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <Image src={'/user/resume/comment-img.png'} alt='comment-img' width={36} height={36} className='rounded-full bg-[#D9D9D9] sm:w-[36px] sm:h-[36px] w-[20px] h-[20px]' />
          <h6 className='m-[0px_10px] font-medium sm:text-[17px] text-[12px]'>Sunju malrn</h6>
          <p className='sm:text-[14px] text-[8px] font-medium text-[#808080]'>1 час назад</p>
        </div>
        <div className="">
          <button onClick={handleEditComment} className='will-change-transform transition-all active:scale-90 mr-[20px]'>
            <svg className='sm:w-[16px] sm:h-[16px] w-[12px] h-[12px]' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.625 3.95006L12.0505 0.374992C11.9317 0.256107 11.7906 0.1618 11.6352 0.0974584C11.4799 0.0331166 11.3135 0 11.1453 0C10.9772 0 10.8107 0.0331166 10.6554 0.0974584C10.5001 0.1618 10.359 0.256107 10.2401 0.374992L0.375211 10.2402C0.255833 10.3586 0.161187 10.4996 0.0967749 10.6549C0.0323627 10.8103 -0.000530757 10.9768 6.47604e-06 11.145V14.72C6.47604e-06 15.0595 0.134865 15.3851 0.374914 15.6251C0.614964 15.8651 0.94054 16 1.28002 16H4.85526C5.02342 16.0005 5.19 15.9676 5.34534 15.9032C5.50067 15.8388 5.64164 15.7442 5.76007 15.6248L15.625 5.76039C15.7439 5.64153 15.8382 5.50041 15.9025 5.3451C15.9669 5.18979 16 5.02333 16 4.85522C16 4.68711 15.9669 4.52065 15.9025 4.36534C15.8382 4.21003 15.7439 4.06891 15.625 3.95006ZM1.54482 10.8802L8.3201 4.10525L9.65532 5.4404L2.88004 12.2145L1.54482 10.8802ZM1.28002 12.4249L3.57525 14.72H1.28002V12.4249ZM5.12007 14.4553L3.78485 13.1201L10.5601 6.34516L11.8953 7.68031L5.12007 14.4553ZM12.8002 6.77555L9.22491 3.20048L11.1449 1.28056L14.7202 4.85482L12.8002 6.77555Z" fill="black" fillOpacity="0.8"/>
            </svg>
          </button>
          <button className='will-change-transform transition-all active:scale-90'>
            <svg className='sm:w-[16px] sm:h-[16px] w-[12px] h-[12px]' width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.4167 2.46154H10.5V1.84615C10.5 1.35652 10.3156 0.886947 9.98744 0.540726C9.65925 0.194505 9.21413 0 8.75 0H5.25C4.78587 0 4.34075 0.194505 4.01256 0.540726C3.68437 0.886947 3.5 1.35652 3.5 1.84615V2.46154H0.583333C0.428624 2.46154 0.280251 2.52637 0.170854 2.64178C0.0614583 2.75719 0 2.91371 0 3.07692C0 3.24013 0.0614583 3.39666 0.170854 3.51207C0.280251 3.62747 0.428624 3.69231 0.583333 3.69231H1.16667V14.7692C1.16667 15.0957 1.28958 15.4087 1.50838 15.6395C1.72717 15.8703 2.02391 16 2.33333 16H11.6667C11.9761 16 12.2728 15.8703 12.4916 15.6395C12.7104 15.4087 12.8333 15.0957 12.8333 14.7692V3.69231H13.4167C13.5714 3.69231 13.7197 3.62747 13.8291 3.51207C13.9385 3.39666 14 3.24013 14 3.07692C14 2.91371 13.9385 2.75719 13.8291 2.64178C13.7197 2.52637 13.5714 2.46154 13.4167 2.46154ZM4.66667 1.84615C4.66667 1.68294 4.72812 1.52642 4.83752 1.41101C4.94692 1.2956 5.09529 1.23077 5.25 1.23077H8.75C8.90471 1.23077 9.05308 1.2956 9.16248 1.41101C9.27188 1.52642 9.33333 1.68294 9.33333 1.84615V2.46154H4.66667V1.84615ZM11.6667 14.7692H2.33333V3.69231H11.6667V14.7692ZM5.83333 6.76923V11.6923C5.83333 11.8555 5.77187 12.012 5.66248 12.1275C5.55308 12.2429 5.40471 12.3077 5.25 12.3077C5.09529 12.3077 4.94692 12.2429 4.83752 12.1275C4.72812 12.012 4.66667 11.8555 4.66667 11.6923V6.76923C4.66667 6.60602 4.72812 6.4495 4.83752 6.33409C4.94692 6.21868 5.09529 6.15385 5.25 6.15385C5.40471 6.15385 5.55308 6.21868 5.66248 6.33409C5.77187 6.4495 5.83333 6.60602 5.83333 6.76923ZM9.33333 6.76923V11.6923C9.33333 11.8555 9.27188 12.012 9.16248 12.1275C9.05308 12.2429 8.90471 12.3077 8.75 12.3077C8.59529 12.3077 8.44692 12.2429 8.33752 12.1275C8.22812 12.012 8.16667 11.8555 8.16667 11.6923V6.76923C8.16667 6.60602 8.22812 6.4495 8.33752 6.33409C8.44692 6.21868 8.59529 6.15385 8.75 6.15385C8.90471 6.15385 9.05308 6.21868 9.16248 6.33409C9.27188 6.4495 9.33333 6.60602 9.33333 6.76923Z" fill="black" fillOpacity="0.8"/>
            </svg>
          </button>
        </div>
      </div>
      <div className="sm:mt-[15px] mt-[5px]">
        <div className="mb-[10px]">
          {editComment 
            ?(
              <Textarea 
                commentValue={commentValue} 
                setCommentValue={setCommentValue} 
                handleSubmit={handleSubmit} 
              />
            )
            : <p className='font-normal sm:text-[17px] text-[12px] w-[50%]'>{commentValue}</p>
          }
        </div>
        <div className="flex items-center">
          <button className='transition-all will-change-transform active:scale-90 sm:text-[14px] text-[10px] text-black text-opacity-[0.8]'>Ответить</button>
          <div className="m-[0px_21px] flex items-center">
            <button onClick={handleLike} className='transition-all will-change-transform active:scale-90 '>
              <svg className='sm:w-[20px] sm:h-[17px] w-[12px] h-[12px]' xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 24 24">
                <path stroke={like ? '' : '#15950C'} fill={like ? '#ef4444': 'transparent'} d="M13.12,2.06 L7.58,7.6 C7.21,7.97 7,8.48 7,9.01 L7,19 C7,20.1 7.9,21 9,21 L18,21 C18.8,21 19.52,20.52 19.84,19.79 L23.1,12.18 C23.94,10.2 22.49,8 20.34,8 L14.69,8 L15.64,3.42 C15.74,2.92 15.59,2.41 15.23,2.05 C14.64,1.47 13.7,1.47 13.12,2.06 Z M3,21 C4.1,21 5,20.1 5,19 L5,11 C5,9.9 4.1,9 3,9 C1.9,9 1,9.9 1,11 L1,19 C1,20.1 1.9,21 3,21 Z"/>
              </svg>
            </button>
            <p className='sm:text-[14px] text-[10px] text-black text-opacity-[0.8] ml-[5px]'>1k</p>
          </div>
          <div className="flex items-center">
            <button onClick={() => setOpenPostCommentsList(!openPostCommentsList)} className='transition-all will-change-transform active:scale-90'>
              <svg className='sm:w-[14px] sm:h-[15px] w-[10px] h-[10px]' width="14" height="15" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0C5.14411 0.00203812 3.36482 0.740191 2.0525 2.0525C0.740191 3.36482 0.00203812 5.14411 0 7V12.88C0 13.177 0.118 13.4619 0.32804 13.672C0.538081 13.882 0.822958 14 1.12 14H7C8.85652 14 10.637 13.2625 11.9497 11.9497C13.2625 10.637 14 8.85652 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0ZM7 12.88H1.12V7C1.12 5.83705 1.46486 4.70021 2.11096 3.73325C2.75706 2.76629 3.67539 2.01263 4.74982 1.56759C5.82425 1.12255 7.00652 1.0061 8.14713 1.23298C9.28774 1.45986 10.3355 2.01988 11.1578 2.84221C11.9801 3.66454 12.5401 4.71226 12.767 5.85287C12.9939 6.99348 12.8775 8.17575 12.4324 9.25018C11.9874 10.3246 11.2337 11.2429 10.2668 11.889C9.29979 12.5351 8.16295 12.88 7 12.88ZM7.84 7.28C7.84 7.44614 7.79073 7.60854 7.69843 7.74668C7.60613 7.88482 7.47494 7.99248 7.32145 8.05606C7.16796 8.11964 6.99907 8.13627 6.83612 8.10386C6.67318 8.07145 6.52351 7.99145 6.40603 7.87397C6.28855 7.75649 6.20855 7.60682 6.17614 7.44388C6.14373 7.28093 6.16036 7.11204 6.22394 6.95855C6.28752 6.80506 6.39518 6.67387 6.53332 6.58157C6.67146 6.48926 6.83386 6.44 7 6.44C7.22278 6.44 7.43644 6.5285 7.59397 6.68603C7.7515 6.84356 7.84 7.05722 7.84 7.28ZM4.76 7.28C4.76 7.44614 4.71073 7.60854 4.61843 7.74668C4.52613 7.88482 4.39494 7.99248 4.24145 8.05606C4.08796 8.11964 3.91907 8.13627 3.75612 8.10386C3.59318 8.07145 3.44351 7.99145 3.32603 7.87397C3.20855 7.75649 3.12855 7.60682 3.09614 7.44388C3.06373 7.28093 3.08036 7.11204 3.14394 6.95855C3.20752 6.80506 3.31518 6.67387 3.45332 6.58157C3.59146 6.48926 3.75386 6.44 3.92 6.44C4.14278 6.44 4.35644 6.5285 4.51397 6.68603C4.6715 6.84356 4.76 7.05722 4.76 7.28ZM10.92 7.28C10.92 7.44614 10.8707 7.60854 10.7784 7.74668C10.6861 7.88482 10.5549 7.99248 10.4015 8.05606C10.248 8.11964 10.0791 8.13627 9.91612 8.10386C9.75318 8.07145 9.60351 7.99145 9.48603 7.87397C9.36856 7.75649 9.28855 7.60682 9.25614 7.44388C9.22373 7.28093 9.24036 7.11204 9.30394 6.95855C9.36752 6.80506 9.47518 6.67387 9.61332 6.58157C9.75146 6.48926 9.91386 6.44 10.08 6.44C10.3028 6.44 10.5164 6.5285 10.674 6.68603C10.8315 6.84356 10.92 7.05722 10.92 7.28Z" fill="#15950C"/>
              </svg>
            </button>
            <p className='sm:text-[14px] text-[10px] text-black text-opacity-[0.8] ml-[5px]'>1k</p>
          </div>
        </div>
        {openPostCommentsList && <PostCommentsList postCommentsList={postCommentsList} />}
      </div>
    </li>
  );
};
