import React from 'react'
import { Button } from 'react-bootstrap'

function Keys(props) {
    const onKeyClick = (e) =>{
        props.getValue(e.target.dataset.value)
    }

    return (
        <Button onClick={(e)=>{onKeyClick(e)}} data-value={props.value} >{props.value}</Button>
    )
}

export default Keys
