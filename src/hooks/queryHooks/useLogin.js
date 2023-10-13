import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { loginService } from '../../services/appServices';

export function useLogin() {
  const navigate = useNavigate();
  const {
    mutate: loginUser,
    isLoading,
    isPaused,
  } = useMutation({
    mutationFn: loginService,

    onSuccess: (data) => {
      localStorage.setItem('TOKEN_VALUE', data.token);
      navigate('/dashboard');
    },

    onError: (error) => {
      toast.error(error?.response?.data?.result || error.message);
    },
  });

  return { loginUser, isLoading, isPaused };
}
