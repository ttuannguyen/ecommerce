import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap'
import Rating from '../components/Rating'



const ProductContainer = ({ products }) => {

    //TO DO: Find the product using the product's id in params
    const params = useParams();
    const product = products.find(p => p._id === parseInt(params.id))
    console.log(product)
  
    return (
    <div>
        {product.name}
    </div>
  )
}

export default ProductContainer