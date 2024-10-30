import { SignupForm } from '@/widgets/signup-form/SignupForm';
import React from 'react';

export default function Page() {
  return (
    <section>
      <SignupForm role={'client'} />
    </section>
  );
};