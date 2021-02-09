import React , {useState , useRef} from 'react'
import Timerbutton from '../Timerbutton/Timerbutton.component';
import './Timer.css'; 
import { timeType } from './../../Types/Timertypes'
const Timer = () => {

    let [time, setTime] = useState<timeType>({
        minute : 15,
        seconds : 0
    })
    const [active, setActive] = useState(false);
    let interval = useRef<any>(null);
    // console.log(interval)

    const updateTime = (time: timeType, interval: NodeJS.Timeout) => {
        let data: timeType = {
            minute : 0,
            seconds : 0
        };
        if(time.seconds > 0){
            data = {
                ...time,
                seconds : time.seconds - 1
            };
        }
        else {
            if(time.seconds === 0){
                if(time.minute === 0) {
                    clearInterval(interval);
                    data = {
                        minute : 0,
                        seconds : 0
                    }
                }
                else{
                    data = {
                        minute : time.minute - 1,
                        seconds : 59
                    }
                }
            }
        }

        return data;
    }

    const startTimer = () => {
        if(active)
            return;
        setActive(true);
        interval.current = setInterval(() => {  //set interval is the js function that accepts two parameter 1st is function and 2nd is time.function runs after every 1000 ms
            setTime(newtime => updateTime(newtime, interval.current));
        }, 1000)
    }

    const stopTimer = () => {
        if(!active)
            return;
        setActive(false);
        clearInterval(interval.current);
    }

    const resetTimer = () => {
        stopTimer();
        setTime({
            minute : 15,
            seconds : 0
        });
    }
    return (
        
        <div className="timer-container">
            <div className="time-display">{time.minute<10? `0${time.minute}`:time.minute}:{time.seconds<10? `0${time.seconds}`:time.seconds}</div>
            <div className="timer-button-container">
                <Timerbutton
                    className = {'start-timer'}
                    buttonAction = {startTimer}
                    bvalue = "START" />
                <Timerbutton 
                    buttonAction = {stopTimer}
                    bvalue = "STOP"
                    className = {'stop-timer'}
                    />
                <Timerbutton 
                    buttonAction = {resetTimer}
                    bvalue = "RESET"
                    className = {'reset-timer'} 
                    />
            </div>
        </div>
    )
}


export default Timer;