import React from 'react'
import Timerbutton from '../Timerbutton/Timerbutton.component';
import './Timer.css';

const Timer = () => {

    const startTimer = () => {
        console.log('timer start')
    }
    const stopTimer = () => {
        console.log('timer stop')
    }
    const resetTimer = () => {
        console.log('reset timer')
    }
    return (
        // <div className = 'timer-container'>
        //     <Timerbutton ></Timerbutton>
        //     <Timerbutton></Timerbutton>
        //     <Timerbutton></Timerbutton>
        //     <div>hey timer</div>
        // </div>
        <div className="timer-container">
            <div className="time-display">00</div>
            <div className="timer-button-container">
                <Timerbutton  />
                <Timerbutton />
                <Timerbutton />
            </div>
        </div>
    )
}


export default Timer;