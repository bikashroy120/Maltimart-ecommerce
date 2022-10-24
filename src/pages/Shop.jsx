import React from 'react'
import Helmet from '../compononts/helmet/Helmet'
import { Container, Row, Col } from "reactstrap";
import CommongSection from '../compononts/UI/CommongSection';
import '../styles/shop.css'

const Shop = () => {
  return (
    <Helmet title={"shop"}>
      <CommongSection title={"Product"}/>
      <section className='shop_section'>
          <Container>
            <Row>
              <Col lg='3'>
                <div className='filter_widget'>
                  <select>
                    <option>Filter by Category</option>
                    <option value="mobile">Mobile</option>
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col lg='3'>
              <div className='filter_widget'>
                  <select>
                    <option>Filter by Category</option>
                    <option value="mobile">Mobile</option>
                    <option value="sofa">Sofa</option>
                    <option value="chair">Chair</option>
                    <option value="watch">Watch</option>
                    <option value="wireless">Wireless</option>
                  </select>
                </div>
              </Col>
              <Col lg='6'>
                <div className='search_box'>
                  <input type="text" placeholder='Search........'/>
                  <span><i className='ri-search-line'></i></span>
                </div>
              </Col>
            </Row>
          </Container>
      </section>
    </Helmet>
  )
}

export default Shop