import './main.css'
import WaypointStep from "../components/waypointStep/waypointStep"
import { useEffect, useState } from 'react';

function Main(props) {

    let [poeOrder, setPoeOrder] = useState({})
    
    const loadPoeOrder = () => {
        fetch("assets/poe-order.json", { headers: { 'Content-Type': 'application/json' } })
            .then((response) => response.json())
            .then(json => setPoeOrder(json))
    }

    useEffect(() => {
        loadPoeOrder()
    }, []);

    const getWhateverINeed = (stepBundle) => {
        if(stepBundle.direction === "horizontal" && stepBundle.columns !== undefined && stepBundle.columns !== null && stepBundle.columns.length > 0)
        {
            return stepBundle.columns.map(column => {
                return <div className='stepColumn'>
                    {
                        stepBundle.steps.filter(item => {
                            return item.column === column 
                        }).map(step => {
                            return <WaypointStep header={`${step.key} ${step.header}`} type={step.type} description={step.description} hints={step.hints} />
                        })
                    }
                </div>
            })
        }else{
            return stepBundle.steps.map(step => {
                return <WaypointStep header={`${step.key} ${step.header}`} type={step.type} description={step.description} hints={step.hints} />
            })
        }
    }


    if (Object.keys(poeOrder).length === 0) {
        return;
    } else {
        return (
            <div className='wrapper'>
                {
                    poeOrder.acts.map(act => {
                        return <div>
                            <h1>{act.key}</h1>
                            {act.stepBundles.map(stepBundle => {
                                return <div key={stepBundle.key} className={`stepWrapper-${stepBundle.direction}`}>
                                    {
                                        getWhateverINeed(stepBundle)
                                    }
                                </div>
                            })}
                        </div>
                    })
                }
            </div>
        )
    }
}

export default Main