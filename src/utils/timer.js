function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function Counter(timer, callback) {
    let timerSeconds = timer * 60;
    
    function updateTimer() {
        let formattedTime = formatTime(timerSeconds);
        console.log("Time Remaining:", formattedTime);
        
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            console.log("Time's up!");
            if (callback) callback();
        } else {
            timerSeconds--;
        }
    }
    
    let timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); 
}

function BreakTimer(breakTime, mainTime) {
    console.log(`Break time! Take ${breakTime} minutes break.`);
    
    Counter(breakTime, function() {
        console.log("Break time's up! Restarting the main timer...");
        Counter(mainTime, function() {
            console.log("Main timer completed!");
        });
    });
}

export { Counter, BreakTimer };
