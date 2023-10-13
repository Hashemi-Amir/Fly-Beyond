import getTime from '../../utils/getTime';

function FlightInfoGeneral({ handleToggleCard, flight }) {
  const {
    hours: srcHours,
    minutes: srcMin,
    month: srcMonth,
    day: srcDay,
  } = getTime(flight.src.time);

  const {
    hours: dstHours,
    minutes: dstMin,
    month: dstMonth,
    day: dstDay,
  } = getTime(flight.dst.time);

  const logoMy = flight.logoStyle.margin.split(' ')[0];
  const logoMx = flight.logoStyle.margin.split(' ')[1];

  return (
    <div
      onClick={handleToggleCard}
      data-after-dynamic-value={flight.class}
      className={`flip-card-front grid h-[132px] cursor-pointer overflow-hidden rounded-lg bg-white after:absolute after:-left-7 after:top-4 after:flex after:h-5 after:w-28 after:-rotate-45 after:items-center after:justify-center after:bg-brand-400 after:text-sm after:font-thin after:capitalize after:text-white after:content-[attr(data-after-dynamic-value)] dark:bg-dark-primary-300 after:dark:bg-primary-600 after:dark:text-primary-100`}
    >
      <ul className="flex items-center justify-end gap-3 px-6">
        {/* airline logo */}
        <li className=" mr-auto ">
          <img
            src={flight.logoSrc}
            className={`aspect-auto h-[${flight.logoStyle.height}] mx-[${logoMx}] my-[${logoMy}]`}
            alt="logo"
          />
        </li>
        {/* src */}
        <li className="flex flex-col items-center justify-center">
          <span className="min-w-fit text-center text-xs text-gray-400 md:max-w-[50px]">
            {flight.src.country.length <= 10
              ? flight.src.country
              : flight.src.iso3}
          </span>
          <span className="min-w-fit text-center text-xl font-extrabold text-secondary dark:text-gray-300">{`${srcHours}:${srcMin}`}</span>
          <span className="min-h-fit text-center text-xs text-gray-400">{`${srcMonth} ${srcDay}`}</span>
        </li>
        {/* plane icon */}
        <li>
          <img src="/airplane.png" className="w-8" alt="" />
        </li>
        {/* dst */}
        <li className="flex flex-col items-center justify-center">
          <span className="min-w-fit text-center text-xs text-gray-400 md:max-w-[50px]">
            {flight.dst.country.length <= 10
              ? flight.dst.country
              : flight.dst.iso3}
          </span>
          <span className="min-w-fit text-center text-xl font-extrabold text-secondary dark:text-gray-300">{`${dstHours}:${dstMin}`}</span>
          <span className="min-w-fit flex-shrink text-center text-xs text-gray-400">{`${dstMonth} ${dstDay}`}</span>
        </li>
      </ul>
      {/* price */}
      <div className="flex items-end justify-center">
        <div className="flex w-fit justify-center rounded-sm border-2 border-dashed border-gray-400 px-10 font-extrabold text-secondary dark:text-gray-300">
          ${flight.price}
        </div>
      </div>
    </div>
  );
}

export default FlightInfoGeneral;
