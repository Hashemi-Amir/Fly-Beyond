import TaxiwaysAnimation from '../../ui/TaxiwayAnimation';

function FlightInfoTop({ handleToggleCard, flight }) {
  return (
    <div
      onClick={handleToggleCard}
      data-after-dynamic-value={flight.class}
      className={`absolute left-0 top-0 h-[132px] cursor-pointer overflow-hidden rounded-lg bg-white after:absolute after:-left-7 after:top-4 after:flex after:h-5 after:w-28 after:-rotate-45 after:items-center after:justify-center after:bg-brand-400 after:text-sm after:font-thin after:capitalize after:text-white after:content-[attr(data-after-dynamic-value)] dark:bg-dark-primary-300 after:dark:bg-primary-600`}
    >
      <ul className="grid grid-cols-3 items-end gap-2 p-4 px-9">
        {/* From */}
        <li className="mb-2 flex flex-col items-center justify-center">
          <span className="text-sm font-semibold dark:text-gray-400">From</span>
          <span className=" text-xl font-extrabold dark:text-gray-300">
            {flight.src.iso3}
          </span>
          <span className="text-center text-xs  text-gray-400">
            {flight.src.airline}
          </span>
        </li>
        {/* Price and Taxiway */}
        <li className="flex flex-col items-center justify-center  gap-3 self-end ">
          <div className="relative flex h-8 w-full items-center justify-center overflow-hidden ">
            {[...Array(3).keys()].map((_, i) => (
              <TaxiwaysAnimation key={i} />
            ))}
            <img src="/airplane.png" className="absolute w-8" alt="" />
          </div>
          <span className="rounded-sm bg-gray-300 px-6 font-bold leading-6 text-secondary dark:text-dark-primary-300">
            ${flight.price}
          </span>
        </li>
        {/* To */}
        <li className="mb-2 flex flex-col items-center justify-center">
          <span className="text-sm font-semibold dark:text-gray-400">To</span>
          <span className=" text-xl font-extrabold dark:text-gray-300">
            {flight.dst.iso3}
          </span>
          <span className="text-center text-xs text-gray-400">
            {flight.dst.airline}
          </span>
        </li>
      </ul>
    </div>
  );
}

export default FlightInfoTop;
