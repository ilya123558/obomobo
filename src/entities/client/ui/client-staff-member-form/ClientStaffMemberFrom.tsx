import { ErrorMessage } from '@/shared/ui/error-message/ErrorMessage';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

interface IProps {
  handlePrev: () => void
}

export const ClientStaffMemberFrom: React.FC<IProps> = ({handlePrev}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<any>();
  const [isSelectedPhoto, setIsSelectedPhoto] = useState(false)

  const router = useRouter()

  const photo = watch('photo')

  useEffect(() => {
    if(photo && photo[0]) {
      setIsSelectedPhoto(true)
    }
  }, [photo])

  const onSubmit = async (data: any) => {
    router.push('/registration')
  };

  return (
    <div className="mb-[100px]">
      <h3 className="mb-[30px] text-center font-semibold text-[25px]">Контакты</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>О компании:</label>
          <textarea
            id="about_company"
            placeholder='Расскажите о своей компании'
            className={'hover:border-[#c4c4c4] resize-none border-[3px] rounded-[8px] h-[100px] transition-all outline-none p-[10px_15px] text-[15px] text-neutral-gray'}
            {...register("about_company", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.about_company?.message && <ErrorMessage>{String(errors.about_company.message)}</ErrorMessage>}
        </div>

        <div className="mb-[20px]">
          <div className="flex items-center">
            <label htmlFor="photo" className='active:scale-95 rounded-[10px] p-[10px_15px] text-[18px] font-normal border-[#c4c4c4] border-[3px] transition-all inline-block cursor-pointer'>
              Выбрать фото
            </label>
            {isSelectedPhoto && <div className="ml-[15px]">Фото выбрано</div>}
            <div>
              <input
                id='photo'
                type="file"
                className='hidden'
                {...register('photo', {
                  required: "Пожалуйста, выберите фото.",
                })}
              />
            </div>
          </div>
          {errors.photo?.message && <ErrorMessage>{String(errors.photo.message)}</ErrorMessage>}
        </div>

        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>Контактные данные:</label>
          <input
            id="contact_data"
            placeholder='Ваш сайт или ссылка для связи'
            className={'hover:border-[#c4c4c4] border-[3px] rounded-[8px] h-[40px] transition-all outline-none p-[0px_15px] text-[15px] text-neutral-gray'}
            {...register("contact_data", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.contact_data?.message && <ErrorMessage>{String(errors.contact_data.message)}</ErrorMessage>}
        </div>

        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>Оптыт работы специалиста:</label>
          <textarea
            id="specialist_work_experience"
            placeholder='Расскажите об опыте специалиста, которого хотите нанять'
            className={'hover:border-[#c4c4c4] resize-none border-[3px] rounded-[8px] h-[100px] transition-all outline-none p-[10px_15px] text-[15px] text-neutral-gray'}
            {...register("specialist_work_experience", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.specialist_work_experience?.message && <ErrorMessage>{String(errors.specialist_work_experience.message)}</ErrorMessage>}
        </div>

        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>Должность:</label>
          <input
            id="position"
            placeholder='Должность специалиста'
            className={'hover:border-[#c4c4c4] border-[3px] rounded-[8px] h-[40px] transition-all outline-none p-[0px_15px] text-[15px] text-neutral-gray'}
            {...register("position", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.position?.message && <ErrorMessage>{String(errors.position.message)}</ErrorMessage>}
        </div>

        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>Требования к кандидату:</label>
          <textarea
            id="candidate_requirements"
            placeholder='Расскажите что требуется от специалиста, которого вы хотите нанять'
            className={'hover:border-[#c4c4c4] resize-none border-[3px] rounded-[8px] h-[100px] transition-all outline-none p-[10px_15px] text-[15px] text-neutral-gray'}
            {...register("candidate_requirements", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.candidate_requirements?.message && <ErrorMessage>{String(errors.candidate_requirements.message)}</ErrorMessage>}
        </div>

        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>Чем предстоит заниматься:</label>
          <textarea
            id="candidate_requirements"
            placeholder='Расскажите чем предстоит заниматься специалисту'
            className={'hover:border-[#c4c4c4] resize-none border-[3px] rounded-[8px] h-[100px] transition-all outline-none p-[10px_15px] text-[15px] text-neutral-gray'}
            {...register("candidate_requirements", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.candidate_requirements?.message && <ErrorMessage>{String(errors.candidate_requirements.message)}</ErrorMessage>}
        </div>

        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>Чем предстоит заниматься:</label>
          <textarea
            id="candidate_requirements"
            placeholder='Расскажите чем предстоит заниматься специалисту'
            className={'hover:border-[#c4c4c4] resize-none border-[3px] rounded-[8px] h-[100px] transition-all outline-none p-[10px_15px] text-[15px] text-neutral-gray'}
            {...register("candidate_requirements", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.candidate_requirements?.message && <ErrorMessage>{String(errors.candidate_requirements.message)}</ErrorMessage>}
        </div>

        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>Испытательный срок:</label>
          <input
            id="probationary_period"
            placeholder='2 недели'
            className={'hover:border-[#c4c4c4] border-[3px] rounded-[8px] h-[40px] transition-all outline-none p-[0px_15px] text-[15px] text-neutral-gray'}
            {...register("probationary_period", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.probationary_period?.message && <ErrorMessage>{String(errors.probationary_period.message)}</ErrorMessage>}
        </div>

        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>График и формат работы:</label>
          <textarea
            id="schedule_and_format_of_work"
            placeholder='Опишите график и формат работы специалиста'
            className={'hover:border-[#c4c4c4] resize-none border-[3px] rounded-[8px] h-[100px] transition-all outline-none p-[10px_15px] text-[15px] text-neutral-gray'}
            {...register("schedule_and_format_of_work", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.schedule_and_format_of_work?.message && <ErrorMessage>{String(errors.schedule_and_format_of_work.message)}</ErrorMessage>}
        </div>

        <div className='flex flex-col mb-[20px]'>
          <p className='text-[18px] mb-[5px]'>Вилка дохода:</p>
          <div className="">
            <div className="mb-[10px]">
              <div className="flex items-center">
                <label className='text-[18px] mb-[5px] mr-[10px]'>От:</label>
                <input
                  id="price_from"
                  placeholder='50 000'
                  className={'hover:border-[#c4c4c4] border-[3px] w-[200px] text-[100] rounded-[8px] h-[40px] transition-all outline-none p-[0px_15px] text-[15px] text-neutral-gray'}
                  {...register("price_from", {
                    required: "Поле не может быть пустым",
                    minLength: {
                      value: 3,
                      message: 'Поле не может быть меньше 3 символов'
                    }
                  })}
                />
              </div>
              {errors.price_from?.message && <ErrorMessage>{String(errors.price_from.message)}</ErrorMessage>}
            </div>
            <div className="">
              <div className="flex items-center">
                <label className='text-[18px] mb-[5px] mr-[10px]'>До:</label>
                <input
                  id="price_to"
                  placeholder='200 000'
                  className={'hover:border-[#c4c4c4] border-[3px] w-[200px] text-[100] rounded-[8px] h-[40px] transition-all outline-none p-[0px_15px] text-[15px] text-neutral-gray'}
                  {...register("price_to", {
                    required: "Поле не может быть пустым",
                    minLength: {
                      value: 1,
                      message: 'Поле не может быть меньше 1 символов'
                    }
                  })}
                />
              </div>
              {errors.price_to?.message && <ErrorMessage>{String(errors.price_to.message)}</ErrorMessage>}
            </div>
          </div>
        </div>

        <div className='flex flex-col mb-[20px]'>
          <label className='text-[18px] mb-[5px]'>Ключевые навыки:</label>
          <textarea
            id="skils"
            placeholder='JavaScript, React, Redux'
            className={'hover:border-[#c4c4c4] resize-none border-[3px] rounded-[8px] h-[100px] transition-all outline-none p-[10px_15px] text-[15px] text-neutral-gray'}
            {...register("skils", {
              required: "Поле не может быть пустым",
              minLength: {
                value: 3,
                message: 'Поле не может быть меньше 3 символов'
              }
            })}
          />
          {errors.skils?.message && <ErrorMessage>{String(errors.skils.message)}</ErrorMessage>}
        </div>
        <div className="w-full flex justify-end mt-[30px]">
          <div className="flex items-center">
            <button type='button' onClick={handlePrev} className="mr-[20px] active:scale-90 transition-all">Назад</button>
            <button className={`p-[10px_20px] bg-green rounded-[10px] active:scale-90 transition-all text-white ${false  ? 'opacity-30': ''}`}>Далее</button>
          </div>
        </div>
      </form>
    </div>
  );
};