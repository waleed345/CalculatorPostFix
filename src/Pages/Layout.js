import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Calculator from '../Components/Calculator'
import List from '../Components/List'

function Layout() {
    const [history, setHistory] = useState([])

    return (
        <Container>
            <Row>
                <Col md="8">
                    <Calculator history={history} setHistory={setHistory} />
                </Col>
                <Col md="4">
                    {history && history.map((v,i)=>{
                        return <List key={i} item={v} />
                    })}
                </Col>
            </Row>
        </Container>

    )
}

export default React.memo(Layout)
