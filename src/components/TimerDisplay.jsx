import React, { useState, useEffect } from "react";

const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
};

const TimerDisplay = ({ timer, setTimer, breakTime, setBreakTime, isActive, setIsActive, isBreak, setIsBreak }) => {
    const [timerSeconds, setTimerSeconds] = useState(timer * 60);
    const audio = document.getElementById("beep");

    useEffect(() => {
        let intervalId;
        if (isActive) {
            intervalId = setInterval(() => {
                setTimerSeconds((prev) => {
                    if (prev > 0) return prev - 1;
        
                    clearInterval(intervalId);
                    audio.play();
        
                    // Toggle between break and session
                    const nextIsBreak = !isBreak;
                    setIsBreak(nextIsBreak);
                    setTimerSeconds(nextIsBreak ? breakTime * 60 : timer * 60);
        
                    return 0;
                });
            }, 1000);
        }
        return () => clearInterval(intervalId);
    }, [isActive, isBreak, timer, setBreakTime, breakTime, setIsActive, setIsBreak, audio]);

    useEffect(() => {
        setTimerSeconds(timer * 60);
    }, [timer]);

    const handleStartStop = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsBreak(false);
        setTimerSeconds(timer * 60);
        setTimer(25);
        setBreakTime(5);
        if(audio){
            audio.pause();
            audio.currentTime = 0;
        }
    };

    return (
        <div className="DisplayWrapper">
            <div className="Display">
                <span id="timer-label">{isBreak ? "Break" : "Session"}</span>
                <span id="time-left">{formatTime(timerSeconds)}</span>
                <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>
            </div>
            <div className="buttons">
                <button id="start_stop" onClick={handleStartStop}>
                    <i className="fa-solid fa-play"></i> 
                    <i className="fa-solid fa-pause"></i>
                </button>
                <button id="reset" onClick={handleReset}>
                    <i className="fa-solid fa-arrows-rotate"></i>
                </button>
            </div>
        </div>
    );
};

export default TimerDisplay;
