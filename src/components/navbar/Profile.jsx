import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import useUsername from '../../hooks/queryHooks/useUsername';
import Popover from '../../ui/Popover';

function Profile() {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const togglerRef = useRef();

  const { data, isLoading, isError, error } = useUsername();

  useEffect(() => {
    isError && toast.error(error?.response?.data?.result || error.message);
  }, [error, isError]);

  function onClosePopover() {
    setPopoverOpen(false);
  }

  function popoverToggleHandler() {
    setPopoverOpen((popoverOpen) => !popoverOpen);
  }

  return (
    <>
      <div
        ref={togglerRef}
        role="button"
        onClick={popoverToggleHandler}
        className=" flex cursor-pointer items-center justify-center gap-2 rounded-[3px] px-2 py-1 text-sm capitalize hover:bg-gray-200 dark:hover:bg-[#464563]"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 p-2 uppercase text-white">
          {data?.username?.[0]}
        </span>
        <span className="dark:text-gray-200">
          {data?.username}
          {isLoading && <AiOutlineLoading3Quarters className="animate-spin" />}
        </span>
        <IoIosArrowDown className="dark:text-gray-200" />
      </div>
      {popoverOpen && (
        <Popover onClose={onClosePopover} togglerRef={togglerRef} />
      )}
    </>
  );
}

export default Profile;
