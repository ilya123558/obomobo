'use client'
import { useSignup } from '@/entities/auth/api/useSignup';
import { TRole, ISignup } from '@/entities/auth/types/signup';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

interface IProps {
  role: TRole
}

export const SignupForm: React.FC<IProps> = ({role}) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ISignup>();

  const { mutate } = useSignup()

  const onSubmit = async (data: ISignup) => {
    await mutate({...data, role })
    // Здесь может быть логика для отправки ссылки на подтверждение на почту
  };

  return (
    <div className="w-full flex justify-center mt-[200px]">
      <div className="w-[600px]">
        <h3 className="mb-[30px] text-center">Регистрация</h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className='flex flex-col mb-[20px]'>
            <label className='text-[18px] mb-[5px]'>Имя</label>
            <input
              id="name"
              type="text"
              placeholder='name'
              className={'hover:border-[#c4c4c4] border-[3px] rounded-[8px] h-[40px] transition-all outline-none p-[0px_15px] text-[15px] text-neutral-gray'}
              {...register("name", { 
                required: "Имя не может быть пустым",
                minLength: {
                  value: 2,
                  message: "Имя не может быть меньше 2 символов",
                },
              })}
            />
            {errors.name?.message && <ErrorMessage>{String(errors.name.message)}</ErrorMessage>}
          </div>

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
              placeholder='Password (8 или больше символов)'
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
            <button className='bg-green text-white transition-all active:scale-95 will-change-transform p-[10px_20px] text-[16px] rounded-[12px]' type="submit">Создать мой аккаунт</button>
            <p className='text-[16px] font-light mt-[20px]'>Уже есть аккаунт? <Link className='text-green underline font-normal ml-[5px]' href={'/login'}>Войти</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};