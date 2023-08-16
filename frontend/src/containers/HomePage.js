import React from 'react'
import { Row, Col } from 'react-bootstrap'


const HomePage = ({ products }) => {

    console.log(products)

  return (
    <div>
        <h1>Lastest Products</h1>
        <Row>
            {products.map(p => (
                <Col>
                    <h3>{p.name}</h3>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomePage