import './waypointStep.css'
import { GiCrossedSwords } from "react-icons/gi";
import { FaPersonWalking } from "react-icons/fa6";
import { CiBag1 } from "react-icons/ci";
import { GiPortal } from "react-icons/gi";
import { FaExclamation } from "react-icons/fa";
import { TbSortAscending } from "react-icons/tb";
import { useState } from 'react';


export default function WaypointStep(props) {

    var [isActive, setIsActive] = useState(true)

    var icons = {
        'exploration': <FaPersonWalking />,
        'loot': <CiBag1 />,
        'kill': <GiCrossedSwords />,
        'portal': <GiPortal />,
        'quest': <FaExclamation />,
        'trial': <TbSortAscending />
    }

    const toggleIsActive = () => {
        setIsActive(!isActive);
    }

    return (
        <div className={`step border-${props.type} ${!isActive ? "inactive" : ""}`} onClick={toggleIsActive}>
            <div className={`stepHeader background-${props.type}`}>
                <span>{icons[props.type]}</span> <p>{props.header}</p>
            </div>

            {(props.description !== undefined && props.description !== null && isActive) && <div className='stepContent'>
                {props.description}
            </div>
            }

            {(props.hints !== undefined && props.hints !== null && isActive) &&
                <div className='stepHints'>
                    {props.hints !== undefined && props.hints.map(item => {
                        return <p><FaExclamation /> {item}</p>;
                    })}
                </div>
            }

        </div>
    )
} 