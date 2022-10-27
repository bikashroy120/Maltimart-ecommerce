import React from 'react'
import { useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../compononts/helmet/Helmet'
import CommongSection from "../compononts/UI/CommongSection";
import img from "../assets/images/empty_cart-512.webp"
import '../styles/cart.css'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Cart = () => {

  const cartItems = useSelector((state)=>state.cart.itemList);

  console.log(cartItems)

  return (
    <Helmet title="Cart">
        <CommongSection title="My Cart"/>
        <section className='our_cart'>
          <Container>
            <Row>
              {
                cartItems.length ? (
                  <Col lg="9">
                  <table className='table '>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>title</th>
                        <th>price</th>
                        <th>Qty</th>
                        <th>Detele</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item,index)=>{
                          return(
                            <tr className='cart_item' key={index}>
                              <td className='cart_img'><img src={item.feature_image} alt="" /></td>
                              <td><span className='span'>{item.productname}</span></td>
                              <td><span className='span'>{item.amount_item}</span></td>
                              <td>
                              <div className='increment_box'>
                                <button><RemoveIcon /></button>
                                <span>2</span>
                                <button><AddIcon /></button>
                              </div>
                              </td>
                              <td>
                                <span className='span'><DeleteIcon /></span>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>
               </Col>
                ) : (
                  <Col lg="12">
                    <div className='emty_cart'>
                      <img src={img} alt="" />
                      <h2><Link to="/shop">Cart is Emity !! Contune Shoping </Link></h2>
                    </div>
                  </Col>
                )
              }
            </Row>
          </Container>
        </section>
    </Helmet>
  )
}

export default Cart