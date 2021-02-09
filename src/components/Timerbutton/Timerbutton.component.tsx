import React from 'react'
import './Timerbutton.css';
import { buttonProps } from './../../Types/Timertypes'


 const Timerbutton:React.FC<buttonProps> = ({buttonAction , bvalue , className}) => {
    // const [minute, setMinute] = useState(0)
    // const [second , setSecond] = useState(0)
    return (
        <div className = 'button-container'>
            <button id = {className} className="button-value" onClick = {buttonAction}>{bvalue}</button>
        </div>
    )
}

export default Timerbutton;