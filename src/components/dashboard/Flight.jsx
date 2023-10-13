import { useState } from 'react';

import FlipCard from './FlipCard';
import FlightInfoTop from './FlightInfoTop';
import FlightInfoGeneral from './FlightInfoGeneral';
import FlightInfoBottom from './FlightInfoBottom';

function Flight({ flight }) {
  const [isCardOpen, setIsCardOpen] = useState(false);

  function handleToggleCard() {
    setIsCardOpen((isCardOpen) => !isCardOpen);
  }

  return (
    <li
      className={`relative transform-gpu  transition-all duration-[.6s]  ${
        isCardOpen ? 'min-h-[264px]' : 'min-h-[132px]'
      } `}
    >
      <FlightInfoTop
        flight={flight}
        handleToggleCard={handleToggleCard}
        isCardOpen={isCardOpen}
      />

      <FlipCard>
        {/* Flip-card-inner */}
        <div
          className={`flip-card-inner  ${
            isCardOpen ? 'rotate-card-inner' : ''
          }`}
        >
          <FlightInfoGeneral
            flight={flight}
            handleToggleCard={handleToggleCard}
          />

          <FlightInfoBottom flight={flight} />
        </div>
      </FlipCard>
    </li>
  );
}

export default Flight;
