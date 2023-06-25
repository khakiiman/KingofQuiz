import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Game } from './components/Game';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='absolute inset-0 flex flex-col justify-between font-sans overflow-x-hidden'>
      <main className='flex flex-col items-center justify-center flex-1 p-5 text-center gap-4 sm:gap-4'>
        <Navbar />
        <div className='flex flex-col items-center justify-start w-full h-full gap-8 sm:justify-center'>
          <Game />
        </div>
      </main>
      <div className='p-4 text-xs flex justify-center sm:justify-start'>
        Powered By &nbsp;
        <a
          target='_blank'
          rel='noreferrer'
          href='https://imankhaki.netlify.app/'
          className='font-[Audiowide] hover:text-red-600 hover:animate-wiggle font-semibold'
        >
          Iman K. Bakhtiarvand
        </a>
      </div>
    </div>
  </React.StrictMode>
);
