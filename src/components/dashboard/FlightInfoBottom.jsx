import getTime from '../../utils/getTime';

function FlightInfoBottom({ flight }) {
  const {
    hours: srcHours,
    minutes: srcMin,
    boardingHour,
    boardingMin,
  } = getTime(flight.src.time);

  const { hours: dstHours, minutes: dstMin } = getTime(flight.dst.time);

  const { durationHours, DuarationMinutes } = getTime(
    flight.src.time,
    flight.dst.time,
  );

  return (
    <div
      className={`flip-card-back relative z-10 grid min-h-[132px] overflow-hidden rounded-md border-t-[1.6px] border-dashed border-gray-400 bg-white shadow-flightCart dark:bg-dark-primary-300 `}
    >
      <ul className="grid grid-cols-3 gap-x-5 px-5 pb-3 pt-6">
        {/* Flight Time and Transfer */}
        <li className="flex flex-col items-start justify-between gap-4">
          <div className="flex flex-col leading-4">
            <span className="text-[15px] font-bold dark:text-gray-300">
              {srcHours}:{srcMin} - {dstHours}:{dstMin}
            </span>
            <span className="text-xs text-gray-400">Flight Time</span>
          </div>
          <div className="flex flex-col leading-4">
            <span className="text-[15px] font-bold dark:text-gray-300">
              {flight.transfer ? 'Yes' : 'No'}
            </span>
            <span className="text-xs text-gray-400">Transfer</span>
          </div>
        </li>
        {/* Duration and Gate*/}
        <li className="ml-3 flex flex-col items-start justify-between gap-2">
          <div className="flex flex-col leading-4">
            <span className="text-[15px] font-bold dark:text-gray-300">{`${durationHours}h ${DuarationMinutes} min`}</span>
            <span className="text-xs text-gray-400">Duration</span>
          </div>
          <div className="flex flex-col leading-4">
            <span className="text-[15px] font-bold dark:text-gray-300">
              {flight.gates}
            </span>
            <span className="text-xs text-gray-400">Gate</span>
          </div>
        </li>
        {/* Boarding and Seat */}
        <li className="ml-5 flex flex-col items-start justify-between gap-2">
          <div className="flex flex-col leading-4">
            <span className="text-[15px] font-bold dark:text-gray-300">{`${boardingHour}:${boardingMin}`}</span>
            <span className="text-xs text-gray-400">Boarding</span>
          </div>
          <div className="flex flex-col leading-4">
            <span className="text-[15px] font-bold dark:text-gray-300">
              {flight.seat}
            </span>
            <span className="text-xs text-gray-400">Seat</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FlightInfoBottom;
