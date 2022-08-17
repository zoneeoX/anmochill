import React from 'react'
import { useLocation } from "react-router-dom";


const Anime = () => {
    const location = useLocation();


  return (
    <div className='bg-slate-900 w-screen h-screen flex justify-center items-center text-4xl text-white'>
        {location.state.title}
    </div>
  )
}

export default Anime