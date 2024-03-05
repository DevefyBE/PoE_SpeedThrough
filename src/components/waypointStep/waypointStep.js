import './waypointStep.css'
import { GiCrossedSwords } from "react-icons/gi";
import { FaPersonWalking } from "react-icons/fa6";
import { CiBag1 } from "react-icons/ci";
import { GiPortal } from "react-icons/gi";
import { FaExclamation } from "react-icons/fa";
import { TbSortAscending } from "react-icons/tb";


export default function WaypointStep(props) {

    var icons = {
        'exploration': <FaPersonWalking />,
        'loot': <CiBag1 />,
        'kill': <GiCrossedSwords />,
        'portal': <GiPortal />,
        'quest': <FaExclamation />,
        'trial': <TbSortAscending />
    }

    if (props.hints === undefined) {

    }

    return (
        <div className={`step border-${props.type}`}>
            <div className={`stepHeader background-${props.type}`}>
                <span>{icons[props.type]}</span> <p>{props.header}</p>
            </div>

            {(props.description !== undefined && props.description !== null) && <div className='stepContent'>
                {props.description}
            </div>
            }

            {(props.hints !== undefined && props.hints !== null) &&
                <div className='stepHints'>
                    {props.hints !== undefined && props.hints.map(item => {
                        return <p><FaExclamation /> {item}</p>;
                    })}
                </div>
            }

        </div>
    )
} 