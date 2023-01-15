import React from "react";
import Link from "next/link";
import "../app/globals.css";
import ProtectedRoute from '@/components/protectedRoute';
import useUserData from '@/utils/useUserData';

const NavLink = ({ image, text, href, className }: { image: string, text: string, href: string; className: string; }) => {
  return (
    <Link
      className={`p-3 w-[40%] md:w-auto md:px-16 md:h-full rounded-3xl flex flex-col justify-between items-center ${className}`}
      href={href}
    >
      <img
        alt={`Link to ${text}`}
        src={image}
        className="w-full md:w-auto md:h-[80%]"
      />
      <div className="text-2xl mt-4">{text}</div>
    </Link>
  );
};
const landingPage = () => {
  const userImage = "https://avatars.githubusercontent.com/u/47562404?v=4";
  const { userData } = useUserData();
  console.log('userData', userData);
  const [userDetails, setUserDetails] = React.useState({
    name: "Prasaya",
    image: "https://avatars.githubusercontent.com/u/47562404?v=4",
  });
  return (
    <ProtectedRoute>
      <div className="shadow-xl p-12 bg-white h-[100vh]">
        <div className="flex justify-between items-center">
          <div className="image w-[10vh] rounded-full">
            <img
              src={userImage}
              alt={`Profile picture`}
              className="rounded-full"
            />
          </div>
          <div className="image w-[5vh] rounded-xl">
            <img
              src="https://cdn-icons-png.flaticon.com/512/8867/8867520.png"
              alt="nav"
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex-col mt-5 ">
          <div className="text-3xl">Hello,&nbsp;
            <span className="name font-normal">
              {userData.firstName} 👋
            </span>
          </div>
        </div>

        <div className="text-black font-medium flex justify-between my-5 md:h-[30vh]">
          <NavLink image="https://cdn-icons-png.flaticon.com/512/2382/2382679.png" text="Exercise" href="/exercise" className='bg-[rgba(247,228,182,0.5)] ' />
          <NavLink image="https://cdn-icons-png.flaticon.com/512/2276/2276931.png" text="Nutrition" href="/nutrition" className='bg-[rgba(247,228,182,0.5)] ' />
        </div>
        <div className="font-medium text-4xl my-8">
          My Health
        </div>
        <div className="text-black font-medium flex justify-between my-5 md:h-[30vh]">
          <NavLink image="https://cdn-icons-png.flaticon.com/512/3588/3588658.png" text="Habits" href="/habitTracker" className='bg-[rgba(50,50,50,.25)] ' />
          <NavLink image="https://cdn-icons-png.flaticon.com/512/3094/3094845.png" text="Sleep" href="/sleepTracker" className='bg-[rgba(50,50,50,.25)] ' />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default landingPage;
