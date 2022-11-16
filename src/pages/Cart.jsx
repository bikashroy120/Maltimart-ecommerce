import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../compononts/helmet/Helmet'
import CommongSection from "../compononts/UI/CommongSection";
import img from "../assets/images/empty_cart-512.webp"
import '../styles/cart.css'
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { cartActions } from '../redux/cart/cartSlice';

const Cart = () => {

  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.cart.itemList);
  const totle = useSelector((state)=>state.cart.subtotal);

  const decrementItemQty = (item) =>{
    dispatch(cartActions.decrementQty(item));
    dispatch(cartActions.getTotals())
  }


  const incrementItemQty = (item) =>{
    dispatch(cartActions.addToCart({
        id:item.item,
        productname: item.productname,
        feature_image: item.feature_image,
        price:Number(item.amount_item)
    }));
    dispatch(cartActions.getTotals())
}


      const onRemoveCart = (item) => {
        dispatch(cartActions.removefCart(item.item));
         dispatch(cartActions.getTotals())
      }

      useEffect(() => {
        dispatch(cartActions.getTotals())
      }, [dispatch])

  return (
    <Helmet title="Cart">
        <CommongSection title="My Cart"/>
        <section className='our_cart'>
          <Container>
            {
              cartItems.length ? (
                <Row>
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
                              <button onClick={()=>decrementItemQty(item.item)}><RemoveIcon className='button-icon'/></button>
                              <span>{item.quantity}</span>
                              <button onClick={()=>incrementItemQty(item)}><AddIcon className='button-icon'/></button>
                            </div>
                            </td>
                            <td>
                              <span className='span spanbutton' onClick={()=>onRemoveCart(item)}><DeleteIcon /></span>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
             </Col>

            <Col lg="3">
                <div className='chakeout'>
                  <div className='wapper'>
                    <span>subtotal</span>
                    <h2>${totle}</h2>
                  </div>
                  <p>taxce and shippping will calculate checkout</p>
                  <button className='btn btn-secondary w-100 mt-3 mb-3'>Checkout</button>
                  <button className='btn btn-secondary w-100'>Continue shopping</button>
                </div>
            </Col>
          </Row>
              ): (
                <Col lg="12">
                    <div className='emty_cart'>
                      <img src={img} alt="" />
                      <h2><Link to="/shop">Cart is Emity !! Contune Shoping </Link></h2>
                    </div>
                  </Col> 
              )
            }
          </Container>
        </section>
    </Helmet>
  )
}

export default Cart