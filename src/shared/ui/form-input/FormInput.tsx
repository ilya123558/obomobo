import React, { InputHTMLAttributes } from 'react';
import { FieldErrors, FieldPath, FieldValues, RegisterOptions, UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';
import { ErrorMessage } from '../error-message/ErrorMessage';

interface IProps <T extends FieldValues> {
  id: FieldPath<T>
  title: string
  register: UseFormRegister<T>
  options: RegisterOptions<T>
  errors: FieldErrors
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
  placeholder?: string
  classNameContainer?: string
  classNameLabel?: string
  className?: string
}

export const FormInput = <T extends FieldValues>({id, title, errors, type, placeholder, className, options, classNameContainer, classNameLabel, register}: IProps<T>) => {
  return (
    <div className={`flex flex-col mb-[20px] ${classNameContainer ? classNameContainer : ''}`}>
      <label className={`mb-[5px] ${classNameLabel ? classNameLabel : ''}`}>{title}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder ? placeholder : ''}
        className={`hover:border-[#c4c4c4] border-[1px] rounded-[8px] h-[40px] transition-all outline-none p-[0px_15px] text-neutral-gray ${className ? className : ''}`}
        {...register(id, options)}
      />
      {errors[id]?.message && <ErrorMessage>{String(errors[id].message)}</ErrorMessage>}
    </div>
  );
};