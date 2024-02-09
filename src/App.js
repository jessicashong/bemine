import { useState } from 'react';
import './App.css';

const phrases = [
  'No',
  'Are you sure?',
  'Try again',
  'Beb, please',
  '🥲',
  "Don't do this to me",
  'About to be bbij',
  'u kidding me?',
  '🙄',
];


function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPress, setYesPress] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className='valentine-container'>
      {yesPress ? (
        <>
          <img alt='jump hug' src='https://media.tenor.com/A0p8Dwm8YYwAAAAi/akirambow-smile-person.gif' />
          <div className='text'>okie, yay</div>
          </>
      ) : (

        <>
          <img 
            alt='checking phone'
            src='https://media1.tenor.com/m/YXhp8VXoWe0AAAAC/checking-couple.gif'
          />

          <div>Will you be my valentine?</div>
          <div>
            <button 
              className='yesButton' 
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPress(true)}
            >
                Yes
              </button>
            <button
              onClick={handleNoClick} className='noButton'
            >
              {getNoButtonText()}
            </button>
          </div>

        </>
        )}
    </div>
  )
}

export default App;
