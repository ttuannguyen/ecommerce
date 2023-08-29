import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from './cartSlice';
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../../components/Message';

const Cart = () => {
  // TO DO: import addToCart action from redux  
  const params = useParams();
  const dispatch = useDispatch();

  // dispatch(addItemToCart())

  // const testing = useSelector(state => state.cart.cartItems)
  // console.log(testing)

  const productId = params.id
  const url = window.location.search
  // const qty = url ? url.split('=')[1] : 1
  const qty = url ? Number(url.split('=')[1]) : 1

  useEffect(() => {
    if(productId) {
      dispatch(addItemToCart({productId, qty}))
    }
  }, [dispatch, productId, qty])

  return (
    <div>
      
    </div>
  )
}

export default Cart