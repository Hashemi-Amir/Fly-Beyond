import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import { logoutService } from '../../services/appServices';

function useLogout() {
  const navigate = useNavigate();

  const {
    isLoading,
    isPaused,
    mutate: logout,
  } = useMutation({
    mutationFn: logoutService,

    onSuccess: () => {
      navigate('/login');
      localStorage.removeItem('TOKEN_VALUE');
    },

    onError: (error) => {
      toast.error(error?.response?.data?.result || error.message);
    },
  });

  return { isLoading, isPaused, logout };
}

export default useLogout;
