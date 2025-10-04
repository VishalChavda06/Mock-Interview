const GameOver = ({ target, attempts, onRestart }) => {
  return (
    <div>
      <h1 >Game Over 🎉</h1>
      <p>You guessed the number <span >{target}</span> in <span>{attempts}</span> attempts.</p>
      <button onClick={onRestart} >Play Again</button>
    </div>
  )
}

export default GameOver