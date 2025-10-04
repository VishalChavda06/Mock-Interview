import { useState } from "react"

const GuessForm = ({onGuess}) => {

  const [number , setNumber] = useState([])


  // Handle Sumbit
  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed = Number(number);
    console.log(parsed)
    onGuess(parsed);
    setNumber('');
  }
  
  
  return (
   <>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter Number 1 To 100" className="border p-2 m-3 rounded-xl"  value={number} onChange={(e)=> setNumber(e.target.value)}   />
          <button className="bg-indigo-600 p-2 rounded-xl font-bold text-white hover:bg-indigo-700 " >Guess</button>
        </form>
      </div>
   </>
  )
}

export default GuessForm