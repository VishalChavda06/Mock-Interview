import React from 'react'

const Feedback = ({ feedback }) => {
  return (
    <>
      <div className="bg-gray-300 p-3 rounded text-xl ">
        <h4 className='font-bold'>Your FeedBack</h4>
        {feedback || `No Guess yet`}
      </div>
    </>
  )
}

export default Feedback