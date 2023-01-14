import React from 'react';
import '../app/globals.css';
import CircularSlider from '@fseehawer/react-circular-slider';
import { BsCircle } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { Roboto } from '@next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: ['100', '300'] });

function toDigits(n: number) {
    return n < 10 ? `0${n}` : n;
}

const sleepTracker = () => {
    const [sleepRecord, setSleepRecord] = React.useState([
        {
            date: '2021-08-01',
            hours: '22:00',
        },
        {
            date: '2021-08-02',
            hours: '22:00',
        }
    ]);
    let timeData = [];
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            timeData.push(`${i}:${toDigits(j)}`);
        }
    }
    const [sleepTime, setSleepTime] = React.useState(timeData[0]);
    return (
        <div className="flex flex-col bg-white w-[100vw] h-[100vh]">
            <div className="h-1/2 bg-white">
                <div className="h-full rounded-bl-[10vw] bg-gradient-to-br from-[#75D6F5] to-[#E17576] flex flex-col justify-center items-center">
                    <CircularSlider
                        direction={1}
                        knobPosition="top"
                        valueFontSize="4rem"
                        trackColor="#eeeeee"
                        data={timeData}
                        label="Sleep Time"
                        progressColorFrom='#E17576'
                        progressColorTo='#75D6F5'
                        onChange={(value) => setSleepTime(value)}
                        knobColor='#ffffff'
                    />
                    <button className="mt-4 px-6 py-2 rounded-lg bg-green-300/50 flex justify-center items-center">
                        Add
                        <AiOutlinePlus className="ml-1" />
                    </button>
                </div>
            </div>
            <div className="grow bg-[#E17576]">
                <div className={`h-full rounded-tr-[10vw] bg-white py-4 px-6 ${roboto.className}`}>
                    <h1 className={`text-xl font-medium ${roboto.className}`}>Sleep Record</h1>
                    {sleepRecord.map((record) => {
                        return (
                            <div className="flex justify-between items-center mt-4">
                                <div className="flex items-center">
                                    <BsCircle className="text-[#E17576] mr-2" />
                                    <div className="flex flex-col">
                                        <p className="text-lg font-medium">{record.date}</p>
                                        <p className="">{record.hours}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default sleepTracker;
