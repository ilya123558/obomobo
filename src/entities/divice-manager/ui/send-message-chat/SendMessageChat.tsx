'use client'
import React, { useState } from 'react';
import { TextareaChat } from '@/shared/ui/textarea-chat/TextareaChat';
import { VoiceRecorder } from '@/shared/ui/voice-recorder/VoiceRecorder';

export const SendMessageChat = () => {
  const [value, setValue] = useState('')

  return (
    <div className="w-full absolute bottom-0 flex items-center justify-center p-[8px]">
      <div className="w-full">
        <TextareaChat messageValue={value} handleSubmit={() => {}} setMessageValue={setValue} />
      </div>
    </div>
  );
};