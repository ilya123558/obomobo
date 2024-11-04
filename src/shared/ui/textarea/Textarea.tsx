'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ErrorMessage } from '../error-message/ErrorMessage';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import style from './Textarea.module.scss'
import { Loading } from '../loading/Loading';

interface IProps {
  handleSubmit: () => void
  commentValue: string
  setCommentValue: (commentValue: string) => void
  isLoading?: boolean
}

export const Textarea: React.FC<IProps> = ({ handleSubmit, commentValue, setCommentValue, isLoading }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [showPicker, setShowPicker] = useState(false);

  
  const emojiWrapperRef = useRef<HTMLDivElement>(null)
  const pickerBtnRef = useRef<HTMLButtonElement>(null)
  const ref = useRef<HTMLTextAreaElement>(null)

  const addEmoji = async (emojiData: any) => {
    if(errorMessage) {
      setErrorMessage('')
    }
    await setCommentValue(commentValue + emojiData.native)
  };

  const handleChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(errorMessage) {
      setErrorMessage('')
    }
    await setCommentValue(e.target.value)
  }

  const handleOpenPicker = () => {
    setShowPicker(!showPicker)
  }

  const onSubmit = async () => {
    if(commentValue.length < 3) {
      setErrorMessage('Поле не может быть меньше 3 символов')
    }

    await handleSubmit()
  };

  useEffect(() => {
    const textarea = ref.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [commentValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiWrapperRef.current 
        && pickerBtnRef.current 
        && !emojiWrapperRef.current.contains(event.target as Node) 
        && !pickerBtnRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {isLoading && <Loading className='h-full absolute z-40' />}
      <form>
        <div className="border-[1px] rounded-[6px] flex w-full hover:border-[#c4c4c4] p-[5px]">
          <div className="p-[0px_10px] w-full flex items-center">
            <textarea
              ref={ref}
              value={commentValue}
              placeholder='Напишите что-нибудь...'
              className={'resize-none transition-all outline-none sm:text-[15px] text-[10px] text-neutral-gray w-full'}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col-reverse">
            <div className="flex items-center relative">
              <div ref={emojiWrapperRef} className={`absolute bottom-[60px] right-0 z-10 transition-all ${showPicker ? 'translate-y-[0px] opacity-1' : 'translate-y-[5%] pointer-events-none opacity-0'}`}>
                <div className="sm:block hidden">
                  {<Picker locale={'ru'} data={data} onEmojiSelect={addEmoji} />}
                </div>
                <div className="sm:hidden block">
                  {
                    <Picker
                      emojiSize={12}
                      perLine={9}
                      emojiButtonSize={20}
                      maxFrequentRows={2}
                      locale={'ru'} 
                      data={data} 
                      onEmojiSelect={addEmoji} 
                    />
                  }
                </div>
              </div>
              <button ref={pickerBtnRef} onClick={handleOpenPicker} type='button' className="transition-all will-change-transform active:scale-95 mr-[15px]">
                <svg className='sm:w-[24px] sm:h-[24px] w-[18px] h-[18px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9966 8.81843 22.7313 5.76814 20.4816 3.51843C18.2319 1.26872 15.1816 0.00335979 12 0ZM7.84616 8.30769C8.12001 8.30769 8.38771 8.3889 8.61541 8.54104C8.84311 8.69318 9.02058 8.90943 9.12538 9.16244C9.23017 9.41544 9.25759 9.69384 9.20417 9.96243C9.15074 10.231 9.01887 10.4777 8.82523 10.6714C8.63159 10.865 8.38487 10.9969 8.11628 11.0503C7.84769 11.1037 7.56929 11.0763 7.31629 10.9715C7.06328 10.8667 6.84704 10.6893 6.69489 10.4616C6.54275 10.2339 6.46154 9.96616 6.46154 9.69231C6.46154 9.32508 6.60742 8.9729 6.86709 8.71323C7.12675 8.45357 7.47893 8.30769 7.84616 8.30769ZM17.4138 15.2308C16.2265 17.2835 14.2535 18.4615 12 18.4615C9.74654 18.4615 7.77347 17.2846 6.58616 15.2308C6.51937 15.1257 6.47452 15.0082 6.45432 14.8854C6.43411 14.7625 6.43897 14.6369 6.46859 14.5159C6.4982 14.395 6.55198 14.2813 6.62667 14.1818C6.70136 14.0822 6.79543 13.9987 6.90321 13.9364C7.01099 13.8741 7.13026 13.8342 7.25385 13.8192C7.37744 13.8042 7.50278 13.8143 7.62235 13.849C7.74191 13.8837 7.85322 13.9422 7.94959 14.0211C8.04595 14.0999 8.12537 14.1974 8.18308 14.3077C9.045 15.7973 10.3996 16.6154 12 16.6154C13.6004 16.6154 14.955 15.7962 15.8169 14.3077C15.8746 14.1974 15.9541 14.0999 16.0504 14.0211C16.1468 13.9422 16.2581 13.8837 16.3777 13.849C16.4972 13.8143 16.6226 13.8042 16.7462 13.8192C16.8697 13.8342 16.989 13.8741 17.0968 13.9364C17.2046 13.9987 17.2986 14.0822 17.3733 14.1818C17.448 14.2813 17.5018 14.395 17.5314 14.5159C17.561 14.6369 17.5659 14.7625 17.5457 14.8854C17.5255 15.0082 17.4806 15.1257 17.4138 15.2308ZM16.1538 11.0769C15.88 11.0769 15.6123 10.9957 15.3846 10.8436C15.1569 10.6914 14.9794 10.4752 14.8746 10.2222C14.7698 9.96917 14.7424 9.69077 14.7958 9.42218C14.8493 9.15359 14.9811 8.90688 15.1748 8.71323C15.3684 8.51959 15.6151 8.38772 15.8837 8.3343C16.1523 8.28087 16.4307 8.30829 16.6837 8.41309C16.9367 8.51789 17.153 8.69536 17.3051 8.92306C17.4573 9.15075 17.5385 9.41846 17.5385 9.69231C17.5385 10.0595 17.3926 10.4117 17.1329 10.6714C16.8733 10.931 16.5211 11.0769 16.1538 11.0769Z" fill="black" fill-opacity="0.6"/>
                </svg>
              </button>
              <button onClick={onSubmit} type='button' className={`transition-all will-change-transform active:scale-95 flex items-center justify-center sm:w-[46px] sm:h-[46px] w-[35px] h-[35px] bg-green rounded-[6px] ${style.send_comment__btn}`}>
                <svg className='w-[14px] h-[17px] sm:w-[18px] sm:h-[21px]' width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.267 9.24777L2.77701 0.977261C2.5326 0.83967 2.25206 0.77982 1.97278 0.805686C1.69349 0.831552 1.42872 0.941906 1.21373 1.12204C0.998748 1.30218 0.843756 1.54355 0.769407 1.814C0.695059 2.08445 0.704883 2.37113 0.797572 2.63585L3.43941 10.4553L0.797572 18.2756C0.72405 18.4837 0.701513 18.7064 0.731849 18.925C0.762186 19.1436 0.844512 19.3517 0.97192 19.5319C1.09933 19.7121 1.2681 19.8592 1.46408 19.9607C1.66006 20.0622 1.87752 20.1152 2.09822 20.1153C2.338 20.1148 2.57359 20.0524 2.78218 19.9341L17.2653 11.6498C17.4789 11.5302 17.6568 11.3558 17.7808 11.1447C17.9048 10.9335 17.9704 10.6932 17.9708 10.4483C17.9713 10.2035 17.9066 9.96292 17.7833 9.75133C17.6601 9.53974 17.4828 9.36476 17.2696 9.24432L17.267 9.24777ZM2.09822 18.7353C2.09859 18.7318 2.09859 18.7284 2.09822 18.7249L4.6633 11.1453H9.68822C9.87122 11.1453 10.0467 11.0726 10.1761 10.9432C10.3055 10.8138 10.3782 10.6383 10.3782 10.4553C10.3782 10.2723 10.3055 10.0968 10.1761 9.96737C10.0467 9.83797 9.87122 9.76527 9.68822 9.76527H4.6633L2.1034 2.18907C2.10255 2.18419 2.10079 2.17951 2.09822 2.17527L16.5882 10.4406L2.09822 18.7353Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </form>
    </div>
  );
};