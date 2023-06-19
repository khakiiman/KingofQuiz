/* eslint-disable @typescript-eslint/no-unused-vars */
import { BiMath, BiMap, BiLandscape } from 'react-icons/bi';
import {
  GiAncientRuins,
  GiScarabBeetle,
  GiChemicalDrop,
  GiSaberToothedCatHead,
} from 'react-icons/gi';
import { MdOutlineScience } from 'react-icons/md';
import { SiDatadog } from 'react-icons/si';
import { Category } from '../questions';

type Props = {
  category: Category;
  onStartClick: () => void;
  onCategorySet: (category: Category) => void;
};

export function GameStart({ category, onStartClick, onCategorySet }: Props) {
  //
  function buttonColor(c: Category) {
    if (category === c) return 'secondary';
    return undefined;
  }

  function buttonClasses(c: Category) {
    if (category === c)
      return 'opacity-100 flex-col gap-2 min-w-fit w-26 h-20 ';
    return 'flex-col gap-2 min-w-fit w-26 h-20 opacity-50 ';
  }

  return (
    <>
      <div className='flex justify-center text-center items-center'>
        <h1 className='capitalize font-[Audiowide] font-bold text-2xl text-[#f7ea25]'>quiz categories</h1>
      </div>
      <div className='grid grid-cols-3 gap-16 items-center btn-group'>
        <button
          color={buttonColor('geography')}
          className={`${buttonClasses(
            'geography'
          )} categoryButton before:bg-[url('https://s28.picofile.com/file/8464729626/categoryButImg.jpg')]`}
          onClick={() => onCategorySet('geography')}
          data-testid='geography-category'
        >
          <div className='before:content-["GEOGRAPHY"] after:content-["Select!"] '>
            <BiMap
              strokeWidth={'0.8px'}
              stroke='#000'
              color='#f7ea25'
              size='30px'
              className='flex justify-center items-center font-extrabold'
            />
          </div>
        </button>

        <button
          color={buttonColor('math')}
          className={`${buttonClasses(
            'math'
          )} categoryButton before:bg-[url('https://s28.picofile.com/file/8464751200/mathButImg2.jpg')] before:bg-center`}
          onClick={() => onCategorySet('math')}
          data-testid='math-category'
        >
          <div className='before:content-["MATH"] after:content-["Select!"]'>
            <BiMath
              strokeWidth={'0.8px'}
              stroke='#000'
              color='#f7ea25'
              size='30px'
              className='flex justify-center items-center font-extrabold'
            />
          </div>
        </button>

        <button
          color={buttonColor('animalSpecies')}
          className={`${buttonClasses(
            'animalSpecies'
          )} categoryButton before:bg-[url('https://s29.picofile.com/file/8464751734/animalSpeciesButImg2.jpg')]`}
          onClick={() => onCategorySet('animalSpecies')}
          data-testid='animalSpecies-category'
        >
          <div className='before:content-["ANIMAL_SPECIES"] after:content-["Select!"]'>
            <GiScarabBeetle
              strokeWidth={'0.8px'}
              stroke='#000'
              color='#f7ea25'
              size='30px'
              className='flex justify-center items-center font-extrabold'
            />
          </div>
        </button>

        <button
          color={buttonColor('landmark')}
          className={`${buttonClasses(
            'landmark'
          )} categoryButton before:bg-[url('https://s29.picofile.com/file/8464753476/landmarkButImg2.jpg')]`}
          onClick={() => onCategorySet('landmark')}
          data-testid='landmark-category'
        >
          <div className='before:content-["FAMOUS_LANDMARK"] after:content-["Select!"]'>
            <BiLandscape
              strokeWidth={'0.8px'}
              stroke='#000'
              color='#f7ea25'
              size='30px'
              className='flex justify-center items-center font-extrabold'
            />
          </div>
        </button>

        <button
          color={buttonColor('history')}
          className={`${buttonClasses(
            'history'
          )} categoryButton before:bg-[url('https://s29.picofile.com/file/8464755442/historyEventsButImg2.jpg')]`}
          onClick={() => onCategorySet('history')}
          data-testid='history-category'
        >
          <div className='before:content-["HISTORY_EVENTS"] after:content-["Select!"]'>
            <GiAncientRuins
              strokeWidth={'0.8px'}
              stroke='#000'
              color='#f7ea25'
              size='30px'
              className='flex justify-center items-center font-extrabold'
            />
          </div>
        </button>

        <button
          color={buttonColor('science')}
          className={`${buttonClasses(
            'science'
          )} categoryButton before:bg-[url('https://s28.picofile.com/file/8464756092/scienceTermsButImg.jpg')]`}
          onClick={() => onCategorySet('science')}
          data-testid='science-category'
        >
          <div className='before:content-["SCIENCE_TERMS"] after:content-["Select!"]'>
            <MdOutlineScience
              strokeWidth={'0.8px'}
              stroke='#000'
              color='#f7ea25'
              size='30px'
              className='flex justify-center items-center font-extrabold'
            />
          </div>
        </button>

        <button
          color={buttonColor('animalSounds')}
          className={`${buttonClasses(
            'animalSounds'
          )} categoryButton before:bg-[url('https://s28.picofile.com/file/8464756250/animalSoundsButImg2.jpg')]`}
          onClick={() => onCategorySet('animalSounds')}
          data-testid='animalSounds-category'
        >
          <div className='before:content-["ANIMAL_SOUNDS"] after:content-["Select!"]'>
            <GiSaberToothedCatHead
              strokeWidth={'0.8px'}
              stroke='#000'
              color='#f7ea25'
              size='30px'
              className='flex justify-center items-center font-extrabold'
            />
          </div>
        </button>

        <button
          color={buttonColor('animalDesc')}
          className={`${buttonClasses(
            'animalDesc'
          )} categoryButton before:bg-[url('https://s29.picofile.com/file/8464788768/animalDecriptionButImg2.jpg')]`}
          onClick={() => onCategorySet('animalDesc')}
          data-testid='animalDesc-category'
        >
          <div className='before:content-["ANIMAL_INFO"] after:content-["Select!"] '>
            <SiDatadog
              color='#f7ea25'
              size='30px'
              className='flex justify-center items-center font-extrabold'
            />
          </div>
        </button>

        <button
          color={buttonColor('chemicalElements')}
          className={`${buttonClasses(
            'chemicalElements'
          )} categoryButton before:bg-[url('https://s29.picofile.com/file/8464757668/chemicalElementsButImg.jpg')]`}
          onClick={() => onCategorySet('chemicalElements')}
          data-testid='chemicalElements-category'
        >
          <div className='before:content-["CHEMICAL_TABLE"] after:content-["Select!"]'>
            <GiChemicalDrop
              strokeWidth={'0.8px'}
              stroke='#000'
              color='#f7ea25'
              size='30px'
              className='flex justify-center items-center font-extrabold'
            />
          </div>
        </button>
      </div>

      <button
        data-testid='start-button'
        onClick={onStartClick}
        className='font-[Montserrat] StartButton overflow-hidden mt-4'
      >
        <div className='blobInStartButton'>
          <svg
            xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 310 350'
          >
            <path d='M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z' />
          </svg>
        </div>
        <div className='lineInStartButton'></div>
        <div className='textInStartButton'>
          <p>S</p>
          <p>T</p>
          <p>A</p>
          <p>R</p>
          <p>T</p>
          <p>&nbsp;</p>
          <p>Q</p>
          <p>U</p>
          <p>I</p>
          <p>Z</p>
          <p>!</p>
        </div>
      </button>
    </>
  );
}
