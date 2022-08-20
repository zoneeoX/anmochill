import React from 'react'

const LongcardContainer = ({ children }) => {
  return (
    <>
    <h1 className='mx-[10vw] text-xl text-gray-400 font-bold mt-10'>Top 100 Anime</h1>
    <div className='grid grid-cols-1 gap-5 mb-10'>
        {children}
    </div>
    </>
  )
} 

export default LongcardContainer