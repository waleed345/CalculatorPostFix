import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { calculateEquation, CalculatorLayout, postfixExpression } from '../Utils/Helper'
import Keys from './Keys'

function Calculator({history,setHistory}) {
    const [equation, setEquation] = useState([])
    const [answer, setAnswer] = useState()


    const getValueInArray = (value)=>{
        let _equation = [...equation]

        if(answer){ 
            setAnswer(false)
            setEquation([])
            return
        }

        // remove the whole array and return empty array if the CE is press
        if(value === "CE"){
            setEquation([])
            return
        }

        // Remove the last value from the equation if the C is press 
        if(value === "C"){
            _equation.splice(-1)
            setEquation(_equation)
            return
        }

        // calculate the condition and return the answer if the = is press
        if(value === "="){
            setEquation(_equation)
            // Calculate the answer
            let answer = calculateEquation(_equation)
            // get the postfixExpression
            let postFix = postfixExpression(_equation)
            // set the answer and update the history 
            if(answer){
                setAnswer(answer)

                // keep the previous history and push new one
                let _history = [...history]
                let _obj = Object.assign(
                    {},
                    {
                        expression:_equation.join(''),
                        postFix,
                        answer
                    }
                )
                _history.push(_obj)
                setHistory(_history)
            } 
            return
        }
        
        _equation.push(value)
        setEquation(_equation)
    }
    
    // Make the grid layout from the 2d array and pass the getValueInArray function
    const CalulatorGrid = CalculatorLayout?.map((rowArray,row)=>{
        // map row of calculator
        return rowArray.map((column,col)=>{
            // return calculator keys with random key
            return <Keys key={`${row}+${col}`} value={column} getValue={getValueInArray} />
        })
    }) 

    return (
        <div>
            <Form.Control data-testid="answer-field" className="textalign-right" value={answer ? answer : equation?.join("")} readOnly type="text" disabled />
            <div data-testid="calculator-grid" id="grid_layout" className="calculator">
                {CalulatorGrid}
            </div>
        </div>
    )
}

export default React.memo(Calculator)
