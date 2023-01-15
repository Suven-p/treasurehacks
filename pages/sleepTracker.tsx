import React, { useContext } from "react";
import "../app/globals.css";
import CircularSlider from "@fseehawer/react-circular-slider";
import { BsCircle, BsFillCalendarEventFill } from "react-icons/bs";
import { AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import { Roboto } from "@next/font/google";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase";
import SleepCard from "../components/sleep";
import SleepSlider from "../components/sleepslider";
import { AuthContext } from "../context/AuthContext";
import ProtectedRoute from "@/components/protectedRoute";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300", "700"] });

function toDigits(n: number) {
  return n < 10 ? `0${n}` : n;
}

function todaysFormattedDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth(); // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedToday = dd + " " + months[mm] + ", " + yyyy;
  return formattedToday;
}

const sleepTracker = () => {
  const user = useContext(AuthContext);
  const [sleepRecord, setSleepRecord] = React.useState([]);
  const todaysDate = todaysFormattedDate();

  React.useEffect(() => {
    (async () => {
      if (!user || !user.user) return;
      const coll = collection(firestore, "users", user.user.uid, "sleep");
      const querySnapshot = await getDocs(coll);
      const records = [];
      querySnapshot.forEach((doc) => {
        records.push({
          date: doc.id,
          minutes: doc.data().sleep,
        });
      });
      setSleepRecord(records);
    })();
  });
  let timeData = [];
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j++) {
      timeData.push(`${i}:${toDigits(j)}`);
    }
  }
  const [sleepTime, setSleepTime] = React.useState(0);

  const clickHandler = async () => {
    setSleepRecord((prevRecord) => {
      if (prevRecord.length && prevRecord[0].date === todaysDate) {
        prevRecord[0].minutes = sleepTime;
        return prevRecord;
      }
      return [
        {
          date: todaysDate,
          minutes: sleepTime,
        },
        ...prevRecord,
      ];
    });
    await setDoc(doc(firestore, "users", user.user.uid, "sleep", todaysDate), {
      sleep: sleepTime,
    });
    setSleepTime(0);
  };
  return (
    <ProtectedRoute>
      <div className="flex flex-col bg-white w-[100vw] h-[100vh]">
        <div className="h-1/2 bg-white">
          <div className="h-full rounded-bl-[10vw] bg-gradient-to-br from-[#D8D8EE] to-[#6D6DC1] flex flex-col justify-center items-center">
            <div className="bg-white rounded-full h-[250px] w-[250px] flex justify-center items-center">
              <CircularSlider
                direction={1}
                knobPosition="top"
                valueFontSize="4rem"
                trackColor="rgba(255,255,255,0.5)"
                data={timeData}
                label="Sleep Time"
                progressColorFrom="#6D6DC1"
                progressColorTo="#5D26C1"
                onChange={(value) => setSleepTime(timeData.indexOf(value))}
                knobColor="#6D6DC1"
                labelColor="#000"
                labelFontSize="1.2rem"
                verticalOffset={-10}
                width={240}
              />
            </div>
            <button
              className="mt-4 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
              onClick={clickHandler}
            >
              {sleepRecord.length && sleepRecord[0].date === todaysDate ? (
                <span className="flex justify-center items-center">
                  Edit <AiOutlineEdit className="ml-1" />{" "}
                </span>
              ) : (
                <span className="flex justify-center items-center">
                  Add <AiOutlinePlus className="ml-1" />
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="grow bg-[#6D6DC1]">
          <div
            className={`flex flex-col h-full rounded-tr-[10vw] bg-white md:py-4 md:px-20 p-6 ${roboto.className}`}
          >
            <h1 className={`text-xl font-bold ${roboto.className}`}>
              Sleep Record
            </h1>
            <div className="relative overflow-x-auto mt-4">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sleepRecord.map((record, index) => {
                    return (
                      <tr
                        key={index}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      >
                        <td className="px-6 py-4 text-black">{record.date}</td>

                        <td className="px-6 py-4 text-black">
                          <div className="flex items-center gap-4">
                            <SleepSlider minutes={record.minutes} />
                            <p>{timeData[record.minutes]}</p>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default sleepTracker;
