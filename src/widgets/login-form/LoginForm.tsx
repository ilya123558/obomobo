'use client'
import { uselogin } from '@/entities/auth/api/useLogin';
import { useSignup } from '@/entities/auth/api/useSignup';
import { ILogin } from '@/entities/auth/types/login';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ILogin>();

  const {mutate} = uselogin()

  const onSubmit = async (data: ILogin) => {
    await mutate(data)
    // Здесь может быть логика для отправки ссылки на подтверждение на почту
  };

  return (
    <div className="w-full flex justify-center mt-[200px]">
      <div className="w-[600px] ">
        <h3 className="mb-[30px] text-center">Вход</h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='flex flex-col mb-[20px]'>
            <label className='text-[18px] mb-[5px]'>Email</label>
            <input
              id="email"
              type="email"
              placeholder='email'
              className={'hover:border-[#c4c4c4] border-[3px] rounded-[8px] h-[40px] transition-all outline-none p-[0px_15px] text-[15px] text-neutral-gray'}
              {...register("email", {
                required: "Email не может быть пустым",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Неверный email",
                },
              })}
            />
            {errors.email?.message && <ErrorMessage>{String(errors.email.message)}</ErrorMessage>}
          </div>

          <div className='flex flex-col mb-[20px]'>
            <label className='text-[18px] mb-[5px]'>Пароль</label>
            <input
              id="password"
              type="password"
              placeholder='password'
              className={'hover:border-[#c4c4c4] border-[3px] rounded-[8px] h-[40px] transition-all outline-none p-[0px_15px] text-[15px] text-neutral-gray'}
              {...register("password", {
                required: "Пароль не может быть пустым",
                minLength: {
                  value: 8,
                  message: "Пароль должен быть больше 8 символов",
                },
              })}
            />
            {errors.password?.message && <ErrorMessage>{String(errors.password.message)}</ErrorMessage>}
          </div>
          <div className="w-full flex items-center flex-col mt-[50px]">
            <button className='bg-green transition-all active:scale-95 will-change-transform text-white p-[10px_20px] text-[16px] rounded-[12px]' type="submit">Войти</button>
            <p className='text-[16px] font-light mt-[20px]'>Ещё нет аккауна? <Link href={'/signup'} className='text-green underline font-normal ml-[5px]'>Зарегистрироваться</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};