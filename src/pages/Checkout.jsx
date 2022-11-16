import React from 'react'
import { Container, Row } from 'reactstrap'
import Helmet from '../compononts/helmet/Helmet'
import CommongSection from '../compononts/UI/CommongSection'

const Checkout = () => {
  return (
    <Helmet title="Checkout">
        <CommongSection title="My Checkout"/>
        <section className='checkout'>
            <Container>
              <Row>
                  
              </Row>
            </Container>
        </section>  
    </Helmet>
  )
}

export default Checkout