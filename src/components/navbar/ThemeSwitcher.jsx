import { useCallback, useEffect, useState } from 'react';
import { LuMoon } from 'react-icons/lu';
import { BsSun } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';

import Btn from '../../ui/Btn';

function ThemeSwitcher() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'system',
  );

  const HTMLElement = document.documentElement;

  const onWindowWatch = useCallback(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = (event) => {
      if (event.matches) {
        HTMLElement.classList.add('dark');
      } else {
        HTMLElement.classList.remove('dark');
      }
    };

    // Initial check
    updateTheme(prefersDarkScheme);

    // Listen for changes
    prefersDarkScheme.addEventListener('change', updateTheme);

    return () => {
      // Remove the listener when component unmounts
      prefersDarkScheme.removeEventListener('change', updateTheme);
    };
  }, [HTMLElement.classList]);

  useEffect(() => {
    switch (theme) {
      case 'dark':
        HTMLElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        break;
      case 'light':
        HTMLElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        break;

      default:
        localStorage.removeItem('theme');
        onWindowWatch();
        break;
    }
  }, [theme, HTMLElement, onWindowWatch]);

  function handleClick(e) {
    setTheme(e.target.closest('button').name);
  }

  return (
    <div className="mr-2 flex rounded-full border border-gray-500 p-[3px]">
      <Btn
        name="light"
        variation="iconContainer"
        type="button"
        isActive={theme === 'light' ? true : false}
        onClick={handleClick}
      >
        <BsSun
          size={16}
          className={`text-gray-500 transition-all hover:text-gray-900 ${
            theme === 'light' ? '' : 'dark:hover:text-gray-300'
          }`}
        />
      </Btn>
      <Btn
        name="system"
        variation="iconContainer"
        type="button"
        isActive={theme === 'system' ? true : false}
        onClick={handleClick}
      >
        <FiMonitor
          size={16}
          className={`text-gray-500 transition-all hover:text-gray-900 ${
            theme === 'system' ? '' : 'dark:hover:text-gray-300'
          }`}
        />
      </Btn>
      <Btn
        name="dark"
        variation="iconContainer"
        type="button"
        isActive={theme === 'dark' ? true : false}
        onClick={handleClick}
      >
        <LuMoon
          size={16}
          className={`text-gray-500 transition-all hover:text-gray-900 ${
            theme === 'dark' ? '' : 'dark:hover:text-gray-300'
          }`}
        />
      </Btn>
    </div>
  );
}

export default ThemeSwitcher;
