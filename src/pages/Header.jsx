import React, { useRef, useState, useEffect } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('light');
  const toggleBtn = useRef(null);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      toggleBtn.current.classList.remove('bx-moon');
      toggleBtn.current.classList.add('bx-sun');
    } else {
      document.documentElement.classList.remove('dark');
      toggleBtn.current.classList.remove('bx-sun');
      toggleBtn.current.classList.add('bx-moon');
    }
  }, [theme]);

  const toggleMode = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <header className='inline-flex justify-between items-center w-full px-4 py-3 bg-white dark:bg-gray-900'>
      <span className='text-2xl font-medium text-gray-900 dark:text-white'>Dummy</span>
      <button
        className='h-9 w-9 rounded-full flex items-center justify-center cursor-pointer'
        onClick={toggleMode}
      >
        <i className='bx bx-moon text-2xl transition-colors duration-300 dark:text-white text-gray-900' ref={toggleBtn}></i>
      </button>
    </header>
  );
};

export default Header;
