"use client";
import { formatTime } from "@/shared/lib/formatTime";
import React, { useEffect, useRef, useState } from "react";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";
import style from './AudioPlayer.module.scss'

interface IProps {
  audioFileUrl: string
}

export const AudioPlayer: React.FC<IProps> = ({audioFileUrl}) => {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const formWaveSurferOptions = (ref: HTMLElement): WaveSurferOptions => ({
    container: ref,
    waveColor: "#ECEEF0",
    progressColor: "#15950C",
    cursorColor: "transparent",
    height: 23,
    normalize: true,
    backend: "WebAudio",
    barWidth: 2,
    barRadius: 100,
    barGap: 3,
    autoCenter: true
  });

  const handlePlayPause = () => {
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
      setPlaying(!playing);
    }
  };

  useEffect(() => {
    if (!waveformRef.current) {
      return;
    }

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    const audio = wavesurfer.current;

    audio.load(audioFileUrl);

    const cbReady = () => {
      setDuration(Math.round(audio.getDuration()));
    };

    const cbAudioprocess = () => {
      setCurrentTime(Math.round(audio.getCurrentTime()));
    };

    audio.on("ready", cbReady);
    audio.on("audioprocess", cbAudioprocess);

    return () => {
      audio.un("audioprocess", cbAudioprocess);
      audio.un("ready", cbReady);

      setTimeout(() => {
        audio.destroy();
      }, 1000)
    };
  }, []);

  return (
    <div className={`lg:p-[10px_0px_7px_10px] p-[8px_0px_5px_8px] rounded-[10px] w-fit ${style.wrapper}`}>
      <div className="flex items-center lg:text-[12px] text-[10px]">
        <div className="controls flex items-center">
          <button onClick={handlePlayPause} className="lg:w-[39px] lg:h-[39px] w-[30px] h-[30px] transition-all cursor-pointer will-change-transform active:scale-95 rounded-[10px] bg-green flex items-center justify-center">
            {playing ? ( 
              <svg className="lg:w-[10px] lg:h-[15px] w-[7px] h-[12px]" width="10" height="15" viewBox="0 0 10 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.90388 2.65406C3.90388 1.64009 3.08482 0.818115 2.07446 0.818115C1.0641 0.818115 0.245041 1.64009 0.245041 2.65406V12.4458C0.245041 13.4597 1.0641 14.2817 2.07446 14.2817C3.08482 14.2817 3.90388 13.4597 3.90388 12.4458V2.65406Z" fill="white"/>
                <path d="M3.29404 2.65414C3.29404 1.97816 2.748 1.43018 2.07443 1.43018C1.40085 1.43018 0.854813 1.97816 0.854813 2.65414V12.4458C0.854813 13.1218 1.40085 13.6698 2.07443 13.6698C2.748 13.6698 3.29404 13.1218 3.29404 12.4458V2.65414Z" stroke="white"/>
                <path d="M10.0017 2.65406C10.0017 1.64009 9.18269 0.818115 8.17233 0.818115C7.16197 0.818115 6.34291 1.64009 6.34291 2.65406V12.4458C6.34291 13.4597 7.16197 14.2817 8.17233 14.2817C9.18269 14.2817 10.0017 13.4597 10.0017 12.4458V2.65406Z" fill="white"/>
                <path d="M9.39186 2.65414C9.39186 1.97816 8.84582 1.43018 8.17225 1.43018C7.49868 1.43018 6.95264 1.97816 6.95264 2.65414V12.4458C6.95264 13.1218 7.49868 13.6698 8.17225 13.6698C8.84582 13.6698 9.39186 13.1218 9.39186 12.4458V2.65414Z" stroke="white"/>
              </svg>
            ) : (
              <svg className="lg:w-[15px] lg:h-[15px] h-[12px] w-[12px]" fill="#ffffff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M176 480C148.6 480 128 457.6 128 432v-352c0-25.38 20.4-47.98 48.01-47.98c8.686 0 17.35 2.352 25.02 7.031l288 176C503.3 223.8 512 239.3 512 256s-8.703 32.23-22.97 40.95l-288 176C193.4 477.6 184.7 480 176 480z"/>
              </svg>
            )}
          </button>
          <div className="lg:w-[45px] w-[40px] flex items-center justify-center">
            <p className="">{formatTime(currentTime)}</p>
          </div>
        </div>
        <div className="">
          <div id="waveform" className="lg:w-[172px] w-[130px]" ref={waveformRef}></div>
        </div>
        <div className="lg:w-[45px] w-[40px] flex items-center justify-center">
          <p>{formatTime(duration)}</p>
        </div>
      </div>
    </div>
  );
};
