import { type } from 'os';
import React , {useState} from 'react'
import './Timerbutton.css';

// type: buttonprops = {

// }

 const Timerbutton = () => {
    const [minute, setMinute] = useState(0)
    const [second , setSecond] = useState(0)
    return (
        <div className = 'button-container'>
            <button className="button-value">button</button>
        </div>
    )
}

export default Timerbutton;