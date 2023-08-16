import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {product.name}
    </Card>
  )
}

export default Product