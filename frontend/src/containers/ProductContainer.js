import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'



const ProductContainer = ({ products }) => {

    const params = useParams();
    const product = products.find(p => p._id === parseInt(params.id))
  
    return (
    <div>
        {product.name}
        <Link to='/home' className='btn btn-light my-3'>Back to Products</Link>
    </div>
  )
}

export default ProductContainer