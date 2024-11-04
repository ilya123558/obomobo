'use client'
import { uselogin } from '@/entities/auth/api/useLogin';
import { ILogin } from '@/entities/auth/types/login';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import { FormInput } from '@/shared/ui/form-input/FormInput';
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
    console.log(data)
    // await mutate(data)
    // Здесь может быть логика для отправки ссылки на подтверждение на почту
  };

  return (
    <div className="w-full flex justify-center xl:pt-[200px] sm:pt-[100px] pt-[40px] text-[15px]">
      <div className="lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px]">
        <h3 className="mb-[30px] text-center lg:text-[24px] text-[20px]">Вход</h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormInput<ILogin> 
            id={'email'}
            register={register}
            errors={errors}
            title='Email'
            type="email"
            placeholder='Email'
            options={{
              required: "Email не может быть пустым",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Неверный email",
              },
            }}
          />

          <FormInput<ILogin> 
            id={'password'}
            register={register}
            errors={errors}
            title='Пароль'
            type="password"
            placeholder='Пароль'
            options={{
              required: "Пароль не может быть пустым",
              minLength: {
                value: 8,
                message: "Пароль должен быть больше 8 символов",
              },
            }}
          />

          <div className="w-full flex items-center flex-col sm:mt-[50px] mt-[20px]">
            <button className='bg-green transition-all active:scale-95 will-change-transform text-white p-[10px_20px] sm:text-[15px] text-[12px] rounded-[12px]' type="submit">Войти</button>
            <p className='font-light mt-[20px]'>Ещё нет аккауна? <Link href={'/signup'} className='text-green underline font-normal ml-[5px]'>Зарегистрироваться</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};