import { useEffect, useRef } from 'react';

// Note: if we want to be able to close popover/modal by just clicking outside of the popover, all we need is handler props, but if we want to close popover by both clicking outside the popover and clicking on the button that toggles the popover, we need a reference to that toggler too (second props)

function useOutsideClick(
  handler,
  togglerRef = undefined,
  listenCapturing = true,
) {
  const popoverRef = useRef();
  useEffect(() => {
    function handleClick(e) {
      if (
        !popoverRef?.current.contains(e.target) &&
        !togglerRef?.current.contains(e.target)
      ) {
        handler();
      }
    }

    document.addEventListener('click', handleClick, listenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [handler, listenCapturing, togglerRef]);

  return popoverRef;
}

export default useOutsideClick;
