import React from 'react'
import Image from 'next/image'
import '../app/globals.css'

export const exercise = () => {
  return (
    <div className="p-7">
        <div className="justify-between flex mb-1.5">
            <div>
                <button className='bg-transparent flex outline-transparent transition-all' type="button">
                    <Image
                        alt="Hero"
                        src="https://avatars.githubusercontent.com/u/98652711?v=4"
                        width={50}
                        height={50}
                    />
                </button>
                <h1>Hello Prasaya</h1>
            </div>
            <div>
                Placeholder
            </div>
        </div>

        <div className="wd-full flex">
            <button>
                <div>
                    Refresh your body
                    <h3> Ready to start exercise</h3>
                    <Image
                        alt="Play Logo"
                        src=""
                        width={50}
                        height={10}
                    />
                </div>
                <div>
                    <Image
                        alt="Exercising Image"
                        src=""
                        width = {60}
                        height = {10}
                    />
                </div>
            </button>
        </div>

        <h1 className='text-left my-7'>
            Your exercise Menu
        </h1>
        <div className="flex overflow-x-scroll scroll-smooth">
            <div className='mx-14 shadow-3xl w-[250px]'>
                <Image
                    alt="Dumbell"
                    src="https://avatars.githubusercontent.com/u/98652711?v=4"
                    width={100}
                    height={100}
                />
                <h2 className='text-center'>Dumbell </h2>
            </div>
            
            <div className='mx-14 shadow-3xl w-[250px]'>
                <Image
                    alt="Treadmill"
                    src="https://avatars.githubusercontent.com/u/98652711?v=4"
                    width={100}
                    height={100}
                />
                <h2 className='text-center'>Treadmill </h2>
            </div>
            <div className='mx-14 shadow-3xl w-[250px]'>
                <Image
                    alt="Handgrip"
                    src="https://avatars.githubusercontent.com/u/98652711?v=4"
                    width={100}
                    height={100}
                />
                <h2 className='text-center'>Handgrip </h2>
            </div>
            <div className='mx-14 shadow-3xl w-[250px]'>
                <Image
                    alt="Cycling"
                    src="https://avatars.githubusercontent.com/u/98652711?v=4"
                    width={100}
                    height={100}
                />
                <h2 className='text-center'>Cycling </h2>
            </div>
            <div className='mx-14 shadow-3xl w-[250px]'>
                <Image
                    alt="Push-ups"
                    src="https://avatars.githubusercontent.com/u/98652711?v=4"
                    width={100}
                    height={100}
                />
                <h2 className='text-center'>Push-ups </h2>
            </div>
        </div>

        <h1 className='text-left'>
            Your activities to-day
        </h1>
        <div></div>
    </div>
  )
}

export default exercise