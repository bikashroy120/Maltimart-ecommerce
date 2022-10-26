import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../compononts/helmet/Helmet'
import CommongSection from '../compononts/UI/CommongSection'
import {useParams} from 'react-router-dom'
import products from "../assets/data/products";
import { Rating } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../styles/productDeteles.css'


const ProductDetails = () => {

  const params = useParams()

  const Product = products.find((item)=>item.id===params.id)
  const {avgRating,category,description,imgUrl,price,productName,shortDesc,reviews}= Product
  console.log(reviews)



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
                      <button><RemoveIcon /></button>
                      <span>2</span>
                      <button><AddIcon /></button>
                    </div>
                    <button className='add_button'>Add to Cart</button>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails