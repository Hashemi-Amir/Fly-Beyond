import { useQuery } from '@tanstack/react-query';
import { fetchFlightsService } from '../../services/appServices';

function useFlights(page) {
  const { refetch, isFetching, isPaused } = useQuery({
    queryKey: ['flights'],
    queryFn: () => fetchFlightsService(page),
    enabled: false,
    cacheTime: 0,
    staleTime: 0,
  });

  return { refetch, isFetching, isPaused };
}

export default useFlights;
