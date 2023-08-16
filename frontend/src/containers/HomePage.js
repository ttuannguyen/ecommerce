import React from 'react'
import { Row, Col } from 'react-bootstrap'


const HomePage = ({ products }) => {

    console.log(products)

  return (
    <div>
        <h1>Lastest Products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <h3>{product.name}</h3>
                </Col>
            ))}
        </Row>
    </div>
  )
}

export default HomePage