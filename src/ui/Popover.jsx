import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { IoLogOutOutline } from 'react-icons/io5';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import useLogout from '../hooks/queryHooks/useLogout';
import useOutsideClick from '../hooks/generalHooks/useOutsideClick';

function Popover({ onClose, togglerRef }) {
  const popoverRef = useOutsideClick(onClose, togglerRef);

  const { isLoading, isPaused, logout } = useLogout();

  useEffect(() => {
    isPaused && toast.error('Check your internet connection');
  }, [isPaused]);

  function logoutHandler() {
    !isLoading && logout();
  }

  return (
    <div
      role="button"
      onClick={logoutHandler}
      ref={popoverRef}
      className={`absolute right-2 top-16 z-50 flex w-32 items-center  justify-center gap-2 rounded-md border border-gray-400 bg-white p-4 shadow-md dark:bg-dark-primary-300 dark:text-gray-200 ${
        isLoading ? 'cursor-not-allowed' : ''
      }`}
    >
      <span>Log out</span>

      {isLoading ? (
        <AiOutlineLoading3Quarters className="animate-spin" />
      ) : (
        <IoLogOutOutline />
      )}
    </div>
  );
}

export default Popover;
