import React from 'react';
import '../app/globals.css';
import CircularSlider from '@fseehawer/react-circular-slider';

function toDigits(n: number) {
    return n < 10 ? `0${n}` : n;
}

const sleepTracker = () => {
    let data = [];
    for (let i = 0; i < 24; i++) {
        for (let j = 0; j < 60; j++) {
            data.push(`${i}:${toDigits(j)}`);
        }
    }
    const [sleepTime, setSleepTime] = React.useState(data[0]);
    return (
        <div className="w-ful h-[100vh] overflow-scroll flex flex-col justify-center items-center">
            <div className="p-4">
                <CircularSlider
                    direction={1}
                    knobPosition="top"
                    valueFontSize="4rem"
                    trackColor="#eeeeee"
                    data={data}
                    onChange={(value) => setSleepTime(value)}
                // progressColorFrom={isDragging ? "#F0A367" : "#00bfbd"}
                // progressColorTo={isDragging ? "#F65749" : "#009c9a"}
                // labelColor={isDragging ? "#F0A367" : "#00bfbd"}
                // knobColor={isDragging ? "#F0A367" : "#00bfbd"}
                // isDragging={(value) => setIsDragging(value)}
                />
            </div>
            <div className="grow">
                Sleep data
            </div>
        </div>
    );
};

export default sleepTracker;
