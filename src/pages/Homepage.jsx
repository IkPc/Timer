import React, { useState } from "react";
import TimeSelector from "../components/TimeSelector";
import TimerDisplay from "../components/TimerDisplay";
import "./Homepage.css";

const Homepage = () => {
    const [breakTime, setBreakTimer] = useState(5);
    const [timer, setTimer] = useState(25);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    return (
        <div>
            <TimeSelector 
                breakTime={breakTime}
                setBreakTimer={setBreakTimer}
                timer={timer}
                setTimer={setTimer}
            />
            <TimerDisplay
                timer={timer}
                setTimer={setTimer}
                breakTime={breakTime}
                isActive={isActive}
                setIsActive={setIsActive}
                isBreak={isBreak}
                setIsBreak={setIsBreak}
            />
        </div>
    );
};

export default Homepage;
