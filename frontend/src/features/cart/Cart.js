import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addItemToCart } from './cartSlice';
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../../components/Message';

const Cart = () => {

  // TO DO: import addToCart action from redux  
  const params = useParams();
  const dispatch = useDispatch();

  // dispatch(addItemToCart())

  const productId = params.id
  const url = window.location.search
  const qty = url ? Number(url.split('=')[1]) : 1

  return (
    <div>
      
    </div>
  )
}

export default Cart