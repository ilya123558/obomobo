import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ILogin } from '../types/login';

export const uselogin = () => {
  const url =  `${process.env.NEXT_PUBLIC_API_URL as string}/sing-in`

  const result = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: ILogin) => await axios.post<any[]>(url),
  })

  return result
};