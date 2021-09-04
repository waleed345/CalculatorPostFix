import React from 'react'
import { ListGroup } from 'react-bootstrap'

function List({item}) {
    return (
        <div className="history-container">
            <ListGroup variant="flush">
                <ListGroup.Item>{`==>  ${item.expression}`}</ListGroup.Item>
                <ListGroup.Item>{`~>  ${item.postFix}`}</ListGroup.Item>
                <ListGroup.Item>{`==  ${item.answer}`}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default React.memo(List)
