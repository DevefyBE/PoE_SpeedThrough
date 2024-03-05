import './waypointStep.css'
import { GiCrossedSwords } from "react-icons/gi";
import { FaPersonWalking } from "react-icons/fa6";
import { CiBag1 } from "react-icons/ci";
import { GiPortal } from "react-icons/gi";
import { FaExclamation } from "react-icons/fa";

export default function WaypointStep(props) {

    var icons = {
        'exploration': <FaPersonWalking />,
        'loot': <CiBag1 />,
        'kill': <GiCrossedSwords />,
        'portal': <GiPortal />,
        'quest': <FaExclamation />
    }

    return (
        <div className={`step border-${props.type}`}>
            <div className={`stepHeader background-${props.type}`}>
                {icons[props.type]} {props.header}
            </div>
            {/* <hr /> */}
            {props.description != null &&
                <div className='stepContent'>
                    {props.description}
                </div>
            }

        </div>
    )
} 