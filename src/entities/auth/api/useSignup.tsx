import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ISignup } from '../types/signup';

export const useSignup = () => {
  const url =  `${process.env.NEXT_PUBLIC_API_URL as string}/auth/sing-up`

  const result = useMutation({
    mutationKey: ['signup'],
    mutationFn: async (data: ISignup) => await axios.post<any>(url, data),
  })

  return result
};