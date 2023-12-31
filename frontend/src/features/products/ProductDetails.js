import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap';
import Rating from '../../components/Rating';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { listProductAsync } from './productsSlice';

// This page is used to display the details of the product

const ProductDetails = () => {

    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();
    const [qty, setQty] = useState(1)
    // const product = products.find(p => p._id === parseInt(params.id))

    useEffect(() => {
        dispatch(listProductAsync(params))
    }, [dispatch])

    const product = useSelector(state => state.products.productDetails)
    const status = useSelector(state => state.products.status)
    const errors = useSelector(state => state.products.errors)

    const addToCartHandler = () => {
        // console.log(`Add to cart: ${params.id}`)
        navigate(`/cart/${params.id}?qty=${qty}`)
    }
    
  
    return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Back to Products</Link>

        {status === 'loading' ? <Loader />
            : errors ? <Message>{errors}</Message>
                :
                <div>
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
            
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
        
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col xs='auto' className='my-1'>
                                            <Form.Control
                                                as='select'
                                                value={qty}
                                                onChange={(e) => setQty(e.target.value)}
                                            >
                                                {
                                                    [...Array(product.countInStock).keys()].map((x) =>(
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
        
                            <ListGroup.Item>
                                <Button 
                                    onClick={addToCartHandler}
                                    className='btn-block' 
                                    disabled={product.countInStock == 0} 
                                    type='button'
                                >
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </div>
        }
    </div>
  )
}

export default ProductDetails