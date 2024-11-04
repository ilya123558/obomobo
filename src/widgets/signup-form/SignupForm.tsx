'use client'
import { useSignup } from '@/entities/auth/api/useSignup';
import { TRole, ISignup } from '@/entities/auth/types/signup';
import { Button } from '@/shared/ui/button/Button';
import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import { FormInput } from '@/shared/ui/form-input/FormInput';
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
    console.log(data)
    // await mutate({...data, role })
    // Здесь может быть логика для отправки ссылки на подтверждение на почту
  };

  return (
    <div className="w-full flex justify-center xl:pt-[200px] sm:pt-[100px] pt-[40px] text-[15px]">
      <div className="lg:w-[600px] md:w-[500px] sm:w-[400px] w-[300px]">
        <h3 className="mb-[30px] text-center lg:text-[24px] text-[20px]">Регистрация</h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <FormInput<ISignup> 
            id="name"
            placeholder='name'
            register={register}
            errors={errors}
            title='Имя'
            options={{ 
              required: "Имя не может быть пустым",
              minLength: {
                value: 2,
                message: "Имя не может быть меньше 2 символов",
              },
            }}
          />

          <FormInput<ISignup> 
            id="email"
            type="email"
            placeholder='Email'
            register={register}
            errors={errors}
            title='Email'
            options={{
              required: "Email не может быть пустым",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Неверный email",
              },
            }}
          />

          <FormInput<ISignup> 
            id="password"
            type="password"
            placeholder='Пароль (8 или больше символов)'
            register={register}
            errors={errors}
            title='Пароль'
            options={{
              required: "Пароль не может быть пустым",
              minLength: {
                value: 8,
                message: "Пароль должен быть больше 8 символов",
              },
            }}
          />

          <div className="w-full flex items-center flex-col md:mt-[50px] mt-[20px]">
            <Button handleClick={() => {}} className='bg-green sm:text-[15px] text-[10px] text-white transition-all active:scale-95 will-change-transform p-[10px_20px] rounded-[12px]' type="submit">Создать мой аккаунт</Button>
            <p className='font-light mt-[20px]'>Уже есть аккаунт? <Link className='text-green underline font-normal ml-[5px]' href={'/login'}>Войти</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};