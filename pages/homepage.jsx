import React from 'react'
import '../app/globals.css'

function homepage() {
  return (
    <div className= "flex-col bg-[#000000] w-[100vw] h-[100vh]">
      <div className="flex justify-center items-center h-[50vh] bg-white w-full rounded-bl-[25vw]">
        <div className='bg-[#550000] text-green-400 rounded-full h-[25vh] w-[25vh] flex justify-center items-center text-lg hover:text-sm'>
          Logo
        </div>
      </div>
      <div className="h-[50vh] bg-white">
        <div className="h-full bg-black w-full rounded-tr-[25vw]"></div>
      </div>
    </div>
  )
}

export default homepage