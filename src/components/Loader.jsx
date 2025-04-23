import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const Loader = () => {
  const {progress} = useProgress()
  return (
   <Html>
    <span className='canvas-load'></span>
    <p className='text text-[#F1F1F1] font-bold mt-10'>{progress.toFixed(2)}%</p>
   </Html>
  )
}

export default Loader