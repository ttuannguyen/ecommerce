import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'



const ProductContainer = ({ products }) => {

    const params = useParams();
    const product = products.find(p => p._id === parseInt(params.id))
  
    return (
    <div>
        <Link to='/home' className='btn btn-light my-3'>Back to Products</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
        </Row>
        <Col md={6}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                </ListGroup.Item>

                <ListGroup.Item>
                    Price: ${product.price}
                </ListGroup.Item>
                
                <ListGroup.Item>
                    Description: {product.description}
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={6}></Col>
    </div>
  )
}

export default ProductContainer