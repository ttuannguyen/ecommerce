import React from 'react';
import { Containter, Row, Col } from 'react-bootstrap';

const FormContainer = ({children}) => {
  return (
    <Containter>
        <Row className='justify-content-md-center'>
            <Col xs={12} md={6}>
                {children}
            </Col>
        </Row>

    </Containter>
  )
}

export default FormContainer