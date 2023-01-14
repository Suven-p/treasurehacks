import React from 'react'
import Image from 'next/image'
import "../app/globals.css"

const about_us = () => {
  return (
    <div>
      <div className='p-12 text-center bg-[#474e5a] text-white indent-7' >
        <h1 className='text-5xl p-2'> About Us </h1>
          <p> Health-tracker is an app that helps you manage your health.</p>
          <p>You can add your daily routines, habits you want to change as well as habits you want to maintain.</p>
          <p> You can also add your daily activities and track your progress. </p>
      </div>
      

      <h2 className='text-center text-4xl p-3.5 mt-6'>Our Team</h2>
      <div className='mt-24 grid grid-cols-4 justify-items-center'>

        <div>
          <div className="mx-2 shadow-3xl ">
            <Image
              alt="Prasaya"
              src="https://avatars.githubusercontent.com/u/47562404?v=4"
              width={150}
              height={150}
              className="rounded-full align-middle"
            />
            <a href='https://github.com/prasaya' ><h2 className='text-center'>Prasaya</h2></a>
          </div>  
        </div>

        <div>
          <div className="mx-2 shadow-3xl">
            <Image
              alt="Sankalpa"
              src="https://avatars.githubusercontent.com/u/51750221?s=400&v=4"
              width={150}
              height={150}
            />
            <a href='https://github.com/rijalsankalp'><h2 className='text-center'>Sankalpa</h2></a>
          </div>  
        </div>

        <div>
          <div className="mx-2 shadow-3xl">
            <Image
              alt="Saroj Prasad"
              src="https://avatars.githubusercontent.com/u/98652711?v=4"
              width={150}
              height={150}
            />
            <a href='https://github.com/voidcu'><h2 className='text-center'>Saroj Prasad</h2></a>
          </div>  
        </div>

        <div>
          <div className="mx-2 shadow-3xl">
            <Image
              alt="Suven"
              src="https://avatars.githubusercontent.com/u/47393058?v=4"
              width={150}
              height={150}
            />
            <a href='https://github.com/Suven-p'><h2 className='text-center'>Suven</h2></a>
          </div>  
        </div>


      </div>
    </div>

  )
}

export default about_us