import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { listProductsAsync } from '../features/products/productsSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';


const HomePage = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(listProductsAsync())
    }, [dispatch])

    const products = useSelector(state => state.products.entities)
    const status = useSelector(state => state.products.status)
    const errors = useSelector(state => state.products.errors)
    // const { errors, status, entities } = productsList

    return (
        <div>
            <h1>New Arrivals!</h1>
            {status === "loading" ? <Loader />
                : errors ? <Message>{errors}</Message>
                    :
                    <Row>
                        {products.map(product => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <ProductCard product={product}/>
                            </Col>
                        ))}
                    </Row>
            }
        </div>
    )
}

export default HomePage