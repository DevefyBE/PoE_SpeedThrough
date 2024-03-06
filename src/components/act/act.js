import './act.css'
import Step from "../step/step"
import { useEffect, useState } from 'react';

export default function Act(props) {

    var [isActive, setIsActive] = useState(true)

    const toggleIsActive = () => {
        setIsActive(!isActive);
    }

    var act = props.act;

    const getWhateverINeed = (stepBundle) => {
        if (stepBundle.direction === "horizontal" && stepBundle.columns !== undefined && stepBundle.columns !== null && stepBundle.columns.length > 0) {
            return stepBundle.columns.map(column => {
                return <div key={column} className='stepColumn'>
                    {
                        stepBundle.steps.filter(item => {
                            return item.column === column
                        }).map(step => {
                            return <Step key={step.key} header={`${step.key} ${step.header}`} type={step.type} description={step.description} hints={step.hints} />
                        })
                    }
                </div>
            })
        } else {
            return stepBundle.steps.map(step => {
                return <Step key={step.key} header={`${step.key} ${step.header}`} type={step.type} description={step.description} hints={step.hints} />
            })
        }
    }

    const countActSteps = (act) => {
        var count = 0;

        act.stepBundles.map(stepBundle => {
            count += stepBundle.steps.length;
        })

        return count;
    }

    return <div>
        <div onClick={toggleIsActive}>
            <h1>{act.key} (0 / {countActSteps(act)})</h1>
            <hr />
        </div>
        <div className={`${!isActive ? "inactive-act" : ""}`}>
            {act.stepBundles.map(stepBundle => {
                return <div key={stepBundle.key} className={`stepWrapper-${stepBundle.direction}`}>
                    {
                        getWhateverINeed(stepBundle)
                    }
                </div>
            })}
        </div>

    </div>

}