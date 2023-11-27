import React from 'react'


interface choiceProps{
  choice?: String;
  nextQuestion:() => void
}

export default function ChoiceComponent({choice, nextQuestion}:choiceProps) {

  return (
    <div className='basis-1/2 space-y-6'>
      <div className='shadow p-6 text-white text-lg text-center bg-pink-900 rounded'>
        <p>{choice}</p>
      
      </div>

      <div className='flex justify-center '>
        <button onClick={nextQuestion} className='p-6 animate-bounce shadow-xl text-center rounded-lg w-full text-white border-2 text-lg border-white'>
          Choice
        </button>
      </div>
    </div>
  )
}
