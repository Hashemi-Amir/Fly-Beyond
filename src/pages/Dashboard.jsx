import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import useFlights from '../hooks/queryHooks/useFlights';
import Flight from '../components/dashboard/Flight';
import Btn from '../ui/Btn';
import Loader from '../ui/Loader';

function Dashboard() {
  const [flights, setFlights] = useState([]);
  const [page, setPage] = useState(1);
  const [totalFlights, setTotalFlights] = useState(-1);

  const { refetch, isFetching, isPaused } = useFlights(page);

  const handleFetchFlights = useCallback(async () => {
    const { data, isSuccess, isError, error, isPaused } = await refetch();
    isError && toast.error(error?.response?.data?.result || error.message);
    if (isSuccess && !isPaused) {
      setFlights((prev) => [...prev, ...[...data.result]]);
      setTotalFlights(data.total);
      setPage((prev) => ++prev);
    }
  }, [refetch, setFlights, setTotalFlights, setPage]);

  useEffect(() => {
    handleFetchFlights();
  }, [handleFetchFlights]);

  useEffect(() => {
    isPaused && toast.error('Check your internet connection');
  }, [isPaused]);

  return (
    <div className="mx-auto max-w-sm  min-[800px]:max-w-[760px] min-[1200px]:max-w-[1150px]">
      <ul className="grid grid-cols-1 gap-y-9 transition-all min-[800px]:grid-cols-2 min-[800px]:gap-x-9 min-[1200px]:grid-cols-3">
        {flights?.map((flight) => (
          <Flight key={flight.flightNum} flight={flight} />
        ))}
      </ul>

      {totalFlights !== flights.length && flights.length >= 3 && (
        <div className="mt-10 flex items-center justify-center">
          <Btn
            onClick={handleFetchFlights}
            className="flex items-center justify-center gap-2 px-6 py-2"
            disabled={isFetching}
          >
            {isFetching && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )}
            <span>Load more</span>
          </Btn>
        </div>
      )}

      {isFetching && page === 1 && createPortal(<Loader />, document.body)}
    </div>
  );
}

export default Dashboard;
