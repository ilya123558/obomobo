'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ErrorMessage } from '../error-message/ErrorMessage';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { Loading } from '../loading/Loading';
import { VoiceRecorder } from '../voice-recorder/VoiceRecorder';

interface IProps {
  handleSubmit: () => void
  messageValue: string
  setMessageValue: (messageValue: string) => void
  isLoading?: boolean
}

export const TextareaChat: React.FC<IProps> = ({ handleSubmit, messageValue, setMessageValue, isLoading }) => {
  const [audioURL, setAudioURL] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState('')
  const [showPicker, setShowPicker] = useState(false);
  
  const emojiWrapperRef = useRef<HTMLDivElement>(null)
  const pickerBtnRef = useRef<HTMLButtonElement>(null)
  const ref = useRef<HTMLTextAreaElement>(null)

  const addEmoji = async (emojiData: any) => {
    if(errorMessage) {
      setErrorMessage('')
    }
    await setMessageValue(messageValue + emojiData.native)
  };

  const handleChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if(errorMessage) {
      setErrorMessage('')
    }
    await setMessageValue(e.target.value)
  }

  const handleOpenPicker = () => {
    setShowPicker(!showPicker)
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log(';ojdfnsndflwienflwijf')

    if(messageValue.length < 3) {
      setErrorMessage('Поле не может быть меньше 3 символов')
    }

    await handleSubmit()
  };

  const handleAudioURL = (value: string) => {
    setAudioURL(value)
    alert('send audio file')
  }


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
    <div className="relative bg-white">
      {errorMessage && <ErrorMessage className='absolute top-[-40px]'>{errorMessage}</ErrorMessage>}
      {isLoading && <Loading className='h-full absolute z-40' />}
      <form onSubmit={onSubmit}>
        <div className="border-[1px] rounded-[6px] flex w-full hover:border-[#c4c4c4] p-[3px_15px_3px_44px] h-[44px]">
          <VoiceRecorder setAudioURL={handleAudioURL} />
          <div className="p-[0px_12px] w-full flex items-center overflow-hidden">
            <textarea
              ref={ref}
              value={messageValue}
              placeholder='Введите сообщение'
              className={'resize-none transition-all outline-none text-[15px] text-neutral-gray w-full h-[34px] pt-[6px]'}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col-reverse  justify-center">
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
              <div className="flex justify-center h-full">
                <button ref={pickerBtnRef} onClick={handleOpenPicker} type='button' className="transition-all will-change-transform active:scale-95 mr-[20px]">
                  <svg className='sm:w-[24px] sm:h-[24px] w-[18px] h-[18px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C9.62663 0 7.30655 0.703788 5.33316 2.02236C3.35977 3.34094 1.8217 5.21508 0.913451 7.4078C0.00519941 9.60051 -0.232441 12.0133 0.230582 14.3411C0.693605 16.6689 1.83649 18.807 3.51472 20.4853C5.19295 22.1635 7.33115 23.3064 9.65892 23.7694C11.9867 24.2324 14.3995 23.9948 16.5922 23.0865C18.7849 22.1783 20.6591 20.6402 21.9776 18.6668C23.2962 16.6934 24 14.3734 24 12C23.9966 8.81843 22.7313 5.76814 20.4816 3.51843C18.2319 1.26872 15.1816 0.00335979 12 0ZM7.84616 8.30769C8.12001 8.30769 8.38771 8.3889 8.61541 8.54104C8.84311 8.69318 9.02058 8.90943 9.12538 9.16244C9.23017 9.41544 9.25759 9.69384 9.20417 9.96243C9.15074 10.231 9.01887 10.4777 8.82523 10.6714C8.63159 10.865 8.38487 10.9969 8.11628 11.0503C7.84769 11.1037 7.56929 11.0763 7.31629 10.9715C7.06328 10.8667 6.84704 10.6893 6.69489 10.4616C6.54275 10.2339 6.46154 9.96616 6.46154 9.69231C6.46154 9.32508 6.60742 8.9729 6.86709 8.71323C7.12675 8.45357 7.47893 8.30769 7.84616 8.30769ZM17.4138 15.2308C16.2265 17.2835 14.2535 18.4615 12 18.4615C9.74654 18.4615 7.77347 17.2846 6.58616 15.2308C6.51937 15.1257 6.47452 15.0082 6.45432 14.8854C6.43411 14.7625 6.43897 14.6369 6.46859 14.5159C6.4982 14.395 6.55198 14.2813 6.62667 14.1818C6.70136 14.0822 6.79543 13.9987 6.90321 13.9364C7.01099 13.8741 7.13026 13.8342 7.25385 13.8192C7.37744 13.8042 7.50278 13.8143 7.62235 13.849C7.74191 13.8837 7.85322 13.9422 7.94959 14.0211C8.04595 14.0999 8.12537 14.1974 8.18308 14.3077C9.045 15.7973 10.3996 16.6154 12 16.6154C13.6004 16.6154 14.955 15.7962 15.8169 14.3077C15.8746 14.1974 15.9541 14.0999 16.0504 14.0211C16.1468 13.9422 16.2581 13.8837 16.3777 13.849C16.4972 13.8143 16.6226 13.8042 16.7462 13.8192C16.8697 13.8342 16.989 13.8741 17.0968 13.9364C17.2046 13.9987 17.2986 14.0822 17.3733 14.1818C17.448 14.2813 17.5018 14.395 17.5314 14.5159C17.561 14.6369 17.5659 14.7625 17.5457 14.8854C17.5255 15.0082 17.4806 15.1257 17.4138 15.2308ZM16.1538 11.0769C15.88 11.0769 15.6123 10.9957 15.3846 10.8436C15.1569 10.6914 14.9794 10.4752 14.8746 10.2222C14.7698 9.96917 14.7424 9.69077 14.7958 9.42218C14.8493 9.15359 14.9811 8.90688 15.1748 8.71323C15.3684 8.51959 15.6151 8.38772 15.8837 8.3343C16.1523 8.28087 16.4307 8.30829 16.6837 8.41309C16.9367 8.51789 17.153 8.69536 17.3051 8.92306C17.4573 9.15075 17.5385 9.41846 17.5385 9.69231C17.5385 10.0595 17.3926 10.4117 17.1329 10.6714C16.8733 10.931 16.5211 11.0769 16.1538 11.0769Z" fill="black" fill-opacity="0.6"/>
                  </svg>
                </button>
                <button className={`transition-all will-change-transform active:scale-95 flex items-center justify-center`}>
                  <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 9.98818C17.0006 10.2428 16.9365 10.4929 16.8142 10.7127C16.6919 10.9325 16.516 11.114 16.3045 11.2384L2.02788 19.8125C1.82301 19.9344 1.59172 19.999 1.35622 20C1.13924 19.9988 0.925687 19.943 0.733387 19.8375C0.541088 19.7319 0.375624 19.5795 0.250806 19.3931C0.125989 19.2067 0.0454408 18.9916 0.0158861 18.7658C-0.0136685 18.54 0.00862784 18.3101 0.0809138 18.0952L2.37647 10.9553C2.3989 10.8855 2.44134 10.8247 2.49796 10.7812C2.55458 10.7378 2.62261 10.7137 2.69274 10.7124H8.83803C8.93127 10.7127 9.02356 10.6927 9.10916 10.6539C9.19476 10.6151 9.27185 10.5582 9.33564 10.4867C9.39942 10.4153 9.44854 10.3309 9.47995 10.2386C9.51135 10.1464 9.52437 10.0484 9.51819 9.95068C9.50277 9.76697 9.42184 9.59616 9.29162 9.47246C9.16139 9.34875 8.99149 9.28129 8.81592 9.28358H2.69444C2.62329 9.28359 2.55393 9.26015 2.49613 9.21658C2.43832 9.173 2.39498 9.11148 2.37222 9.04068L0.0766629 1.90175C-0.014705 1.62812 -0.0246489 1.33177 0.0481522 1.05206C0.120953 0.772347 0.273053 0.522523 0.484246 0.335773C0.695439 0.149023 0.955729 0.0341868 1.23054 0.00651976C1.50534 -0.0211473 1.78166 0.0396645 2.02278 0.180876L16.3062 8.74419C16.5165 8.86832 16.6915 9.04894 16.8134 9.26754C16.9353 9.48614 16.9997 9.73485 17 9.98818Z" fill="#15950C"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};