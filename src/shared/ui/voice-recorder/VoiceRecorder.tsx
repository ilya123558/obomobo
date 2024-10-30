'use client'
import React, { useState, useRef } from "react";
import style from './VoiceRecorder.module.scss'

interface IProps {
  setAudioURL: (audioURL: string) => void
}

export const VoiceRecorder: React.FC<IProps> = ({setAudioURL}) => {
  const [recording, setRecording] = useState<boolean>(false);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);

      mediaRecorderRef.current.ondataavailable = (event: BlobEvent) => {
        audioChunks.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        audioChunks.current = [];
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (error) {
      console.error("Ошибка доступа к микрофону:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  };

  return (
    <>
    <div className={`${style.recovering__wrapper} absolute left-0 top-[-60px] transition-all duration-500 flex items-center justify-center w-[45px] h-[45px] rounded-full ${recording ? 'opacity-100 translate-y-[0px]' : 'opacity-0 translate-y-[100px]'}`}>
      <svg className={style.recovering} width="20" height="24" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.56286 7.57895C8.56286 8.97684 7.42286 10.1053 6 10.1053C4.57714 10.1053 3.42857 8.97684 3.42857 7.57895V2.52632C3.42857 1.12842 4.57714 0 6 0C7.42286 0 8.57143 1.12842 8.57143 2.52632L8.56286 7.57895ZM6 11.8737C8.36572 11.8737 10.5429 10.1053 10.5429 7.57895H12C12 10.4589 9.66857 12.8337 6.85714 13.2379V16H5.14286V13.2379C2.33143 12.8253 0 10.4505 0 7.57895H1.45714C1.45714 10.1053 3.63429 11.8737 6 11.8737Z" fill="#15950C"/>
      </svg>
    </div>
    <div className="absolute top-0 left-0 h-full bg-white rounded-[0px_10px_10px_0px]">
      <button onClick={recording ? stopRecording : startRecording} type='button' className="w-[45px] bg-[#15950C] rounded-[10px] h-full flex items-center justify-center">
        <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M8.56286 7.57895C8.56286 8.97684 7.42286 10.1053 6 10.1053C4.57714 10.1053 3.42857 8.97684 3.42857 7.57895V2.52632C3.42857 1.12842 4.57714 0 6 0C7.42286 0 8.57143 1.12842 8.57143 2.52632L8.56286 7.57895ZM6 11.8737C8.36572 11.8737 10.5429 10.1053 10.5429 7.57895H12C12 10.4589 9.66857 12.8337 6.85714 13.2379V16H5.14286V13.2379C2.33143 12.8253 0 10.4505 0 7.57895H1.45714C1.45714 10.1053 3.63429 11.8737 6 11.8737Z" fill="white"/>
        </svg>
      </button>
    </div>
    </>
  );
};