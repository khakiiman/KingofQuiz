import { useState, useEffect } from 'react';

import logo from '../assets/favicon.png';
import sun from '../assets/sun.svg';
import moon from '../assets/moon.svg';

const Navbar = () => {
  const [theme, setTheme]: any = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'acid'
  );
  const handleToggle = (e: any) => {
    if (e.target.checked) {
      setTheme('dracula');
    } else {
      setTheme('acid');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme: any = localStorage.getItem('theme');
    document.querySelector('html')?.setAttribute('data-theme', localTheme);
  }, [theme]);

  return (
    <div className='flex items-center justify-between w-full'>
      <div className='flex justify-center items-center'>
        <img src={logo} alt='OM' className='btn btn-ghost p-0' />
        <h1 className='capitalize font-[Audiowide] font-bold text-xl xs:text-2xl mx-4'>
          King of Quiz
        </h1>
      </div>
      <div className='flex-none'>
        <button className='btn btn-square btn-ghost'>
          <label className='swap swap-rotate w-12 h-12'>
            <input
              type='checkbox'
              onChange={handleToggle}
              checked={theme === 'acid' ? false : true}
            />
            <img src={sun} alt='light' className='w-8 h-8 swap-on' />
            <img src={moon} alt='dracula' className='w-8 h-8 swap-off' />
          </label>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
