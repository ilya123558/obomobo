'use client'
import { TRole } from '@/entities/auth/types/signup';
import { SignupForm } from '@/widgets/signup-form/SignupForm';
import { SignupQuestionnaire } from '@/widgets/signup-questionnaire/SignupQuestionnaire';
import React, { useState } from 'react';

export default function Page() {
  const [role, setRole] = useState<TRole | null>('specialist')

  return (
    <section>
      <SignupQuestionnaire role={role} setRole={setRole} />
    </section>
  );
}
