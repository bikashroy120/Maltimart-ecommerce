import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../compononts/helmet/Helmet'
import CommongSection from '../compononts/UI/CommongSection'
import {useParams} from 'react-router-dom'
import products from "../assets/data/products";
import { Rating } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../styles/productDeteles.css'
import TabSection from '../compononts/tabSection/TabSection'
import ProductSlyder from '../compononts/productSlyder/ProductSlyder'


const ProductDetails = () => {

  const params = useParams()
  const [qut,setqut] = useState(1)

  const Product = products.find((item)=>item.id===params.id)
  const {avgRating,category,description,imgUrl,price,productName,shortDesc,reviews}= Product

  const filterCategory = products.filter((item)=>item.category === category)

  const increment = () => {
    setqut(qut + 1);
  };

  const decrement = () => {
    if (qut === 1) {
      setqut(1);
    } else {
      setqut(qut - 1);
    }
  };



  return (
    <Helmet title ="Product-Deteles">
      <CommongSection title ="Product Deteles"/>
      <section className='product_deteles pt-0'>
        <Container>
          <Row>
            <Col lg="6" md="6"> 
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6" md="6">
                <div className='product_deteles_content'>
                    <h2 className='product_name'>{productName}</h2>
                    <p className='short_dec'>{shortDesc}</p>
                     <div className='retting'>
                     <Rating name="read-only" value={avgRating} readOnly />
                     <p>(<span>{avgRating}</span> ratings)</p>
                     </div>
                    <h3 className='price'>${price}</h3>
                    <h5 className='category'>Category : {category}</h5>
                    <div className='increment_box'>
                      <button onClick={decrement}><RemoveIcon /></button>
                      <span>{qut}</span>
                      <button onClick={increment}><AddIcon /></button>
                    </div>
                    <button className='add_button'>Add to Cart</button>
                </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='tabs_section'>
          <TabSection description={description} reviews={reviews}/>
      </section>

      <section className='minget_section'>
          <Container>
            <Row>
              <Col lg="12">
                  <h2>You might also like</h2>
              </Col>
              <ProductSlyder filterCategory={filterCategory} />
            </Row>
          </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails