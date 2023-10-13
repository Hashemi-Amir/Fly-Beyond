import { useQuery } from '@tanstack/react-query';
import { fetchUsernameService } from '../../services/appServices';

function useUsername() {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ['getUsername'],
    queryFn: fetchUsernameService,
    refetchOnWindowFocus: false,
  });

  return { data, isLoading, error, isError };
}

export default useUsername;
