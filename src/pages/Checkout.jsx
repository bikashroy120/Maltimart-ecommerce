import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Form, FormGroup, Row } from 'reactstrap'
import Helmet from '../compononts/helmet/Helmet'
import CommongSection from '../compononts/UI/CommongSection'
import { cartActions } from '../redux/cart/cartSlice'
import "../styles/checkout.css"

const Checkout = () => {

  const dispatch = useDispatch();
  const totle = useSelector((state)=>state.cart.subtotal);
  const totalQuantity = useSelector((state)=>state.cart.itemList);

  useEffect(() => {
    dispatch(cartActions.getTotals())
  }, [dispatch])


  return (
    <Helmet title="Checkout">
        <CommongSection title="My Checkout"/>
        <section className='checkout'>
            <Container>
              <Row>
                  <Col lg="8">
                      <div className='address'>
                        <h2>Billing Information :</h2>
                        <Form>
                          <FormGroup className='from__group'>
                            <input type="text" placeholder='Enter your name'/>
                          </FormGroup>
                          <FormGroup className='from__group'>
                            <input type="email" placeholder='Enter your email'/>
                          </FormGroup>
                          <FormGroup className='from__group'>
                            <input type="text" placeholder='Phone number'/>
                          </FormGroup>
                          <FormGroup className='from__group'>
                            <input type="text" placeholder='Street address'/>
                          </FormGroup>
                          <FormGroup className='from__group'>
                            <input type="text" placeholder='Enter your city'/>
                          </FormGroup>
                          <FormGroup className='from__group'>
                            <input type="text" placeholder='Enter your postCode'/>
                          </FormGroup>
                          <FormGroup className='from__group'>
                            <input type="text" placeholder='Enter your country'/>
                          </FormGroup>
                        </Form>
                      </div>
                  </Col>

                  <Col lg="4"> 
                      <div className='checkout__box'>
                          <div>
                            <span>Total Qty</span>
                            <span>{totalQuantity.length}</span>
                          </div>
                          <div>
                            <span>Subtotal</span>
                            <span>${totle}</span>
                          </div>
                          <div>
                            <span>Shipping</span>
                            <span>$0</span>
                          </div>
                          <div className='outline'></div>
                          <div>
                            <h4>Total Cost</h4>
                            <h4>${totle}</h4>
                          </div>
                          <button>Palce on order</button>
                      </div>
                  </Col>
              </Row>
            </Container>
        </section>  
    </Helmet>
  )
}

export default Checkout