import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from './cartSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../../components/Message';
import { Link } from 'react-router-dom';

const Cart = () => {
  // TO DO: import addToCart action from redux  
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector(state => state.cart.cartItems)

  const productId = params.id
  const url = window.location.search
  // const qty = url ? url.split('=')[1] : 1
  const qty = url ? Number(url.split('=')[1]) : 1

  useEffect(() => {
    if(productId) {
      dispatch(addItemToCart({productId, qty}))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    console.log(id)
  }

  const checkoutHandler = () => {
    // history.pushState('/login?redirect=shipping')
    navigate('/login?redirect=shipping')
  }

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant='info'>Your cart is empty 
            <Link to='/'>Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map(item => (
              <ListGroup.Item key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={3}>
                    <Link to={`/product/${item.id}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>
                    ${item.price}
                  </Col>
                  
                  <Col md={3}>
                    <Form.Control
                        as='select'
                        value={item.qty}
                        onChange={(e) => dispatch(addItemToCart(item.id, Number(e.target.value)))}
                    >
                        {
                            [...Array(item.countInStock).keys()].map((x) =>(
                                <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                </option>
                            ))
                        }
                    </Form.Control>
                  </Col>

                  <Col md={1}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.id)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )
        }
      </Col>

      <Col>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
              ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
            </ListGroup.Item>
          </ListGroup>

          <ListGroup.Item>
            <Button
              type='button'
              className='btn-block'
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              Proceed to Checkout
            </Button>
          </ListGroup.Item>
        </Card>
      </Col>
    </Row>
  )

}

export default Cart