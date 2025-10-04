import GameOver from '../Components/GameOver'
import FeedBack from '../Components/Feedback'
import History from '../Components/History';
import GuessForm from '../Components/GuessForm'
import { useState } from 'react';
import { randomNumber } from '../Utils/randomNumber';
const GamePage = () => {

  const [target, setTarget] = useState(randomNumber([]));
  const [feedback, setFeedback] = useState('');
  const [guesses, setGuesses] = useState([]);
  const [gameOver, setGameOver] = useState(false);


  //handleguess
  const handleGuess = (num) => {
    if (gameOver) return;
    if (!num || num < 1 || num > 100) {
      setFeedback('Please enter the number between 1 and 100');
      console.log(num)
      return;
    }
    setGuesses(prev => [...prev, num]);
    if (num === target) {
      setFeedback('Congratulations You are win 🤩');
      setGameOver(true);
      console.log(num)
    } else if (num < target) {
      setFeedback('Too low! Please Try Again 🔄');
    } else {
      setFeedback('Too high! Very Close ⏪');
    }
  }

  // reset game
  const handleRestart = () => {
    setTarget(randomNumber());
    setFeedback('');
    setGuesses([]);
    setGameOver(false);
  }


  return (
    <div className='max-w-xl mx-auto p-6'>
      <h1 className='text-2xl font-bold mb-4'>Number Guessing Game</h1>

      {!gameOver ? (
        <div className='space-y-4'>
          <GuessForm onGuess={handleGuess} />
          <History guesses={guesses} />
          <FeedBack feedback={feedback} />
        </div>
      ) : (
        <GameOver
          target={target}
          attempts={guesses.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}

export default GamePage