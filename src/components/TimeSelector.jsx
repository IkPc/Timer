import React from "react";

const TimeSelector = ({ breakTime, setBreakTime, timer, setTimer }) => {
    const incrementBreak = () => {
        if (breakTime < 60) setBreakTime(breakTime + 1);
    };

    const decrementBreak = () => {
        if (breakTime > 1) setBreakTime(breakTime - 1);
    };

    const incrementTimer = () => {
        if (timer < 60) setTimer(timer + 1);
    };

    const decrementTimer = () => {
        if (timer > 1) setTimer(timer - 1);
    };

    return (
        <div className="TimeSelectorWrapper">
            <div>
                <h1>25 + 5 Clock</h1>
            </div>
            <div className="InlineTimerSelect">
                <div className="TimerBreak">
                    <label id="break-label">Break Length</label>
                    <div className="control">
                        <button id="break-decrement" onClick={decrementBreak}>
                            <i className="fa-solid fa-arrow-up fa-rotate-180"></i>
                        </button>
                        <span id="break-length">{breakTime}</span>
                        <button id="break-increment" onClick={incrementBreak}>
                            <i className="fa-solid fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
                <div className="TimerLength">
                    <label id="session-label">Session Length</label>
                    <div className="control">
                        <button id="session-decrement" onClick={decrementTimer}>
                            <i className="fa-solid fa-arrow-up fa-rotate-180"></i>
                        </button>
                        <span id="session-length">{timer}</span>
                        <button id="session-increment" onClick={incrementTimer}>
                            <i className="fa-solid fa-arrow-up"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeSelector;
