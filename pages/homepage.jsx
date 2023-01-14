import React,{useState} from 'react'
import Link from 'next/link'
import '../app/globals.css'

function homepage() {
  const d=new Date();
  const monthList=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const [month,setMonth]=useState(d.getMonth());
  const [date,setDate]=useState(d.getDate());
  const [time,setTime]=useState([{'hour':d.getHours(),"min":d.getMinutes()}]);
  return (
    <div className='flex flex-col bg-bgimg bg-cover h-[100vh] w-[100vw] items-center justify-around space-y-10'>
      <div className="space-y-20">
      <div className='bg-[#e6ddea] w-[22vw] h-[25vw] rounded-2xl text-3xl font-bold flex items-center justify-center flex-warp text-center'>{monthList[month]}<br/>{date}</div>
      
      <div className='bg-[#f7e4b6] w-[22vw] h-[25vw] rounded-2xl text-3xl font-bold flex items-center justify-center flex-warp text-center'>{time['hour']}<br/> {time['min']}</div>
      </div>
      <div className='flex flex-row items-center space-x-10 justify-center'>
        <div className='text-4xl text-white flex-wrap text-center font-bold w-2/4'>Random Quate</div>
      <Link className=" " href="/">
        <div className='flex bg-white rounded-full w-[10vh] h-[10vh] items-center justify-center '> <p className="font-bold text-3xl ">&#187;</p> </div>
        </Link>

      </div>
      
    </div>
  )
}

export default homepage