import React from 'react'
import { Col } from 'reactstrap'
import './product.css'
import {motion} from "framer-motion"
import {useNavigate} from 'react-router-dom'

const ProductCart = ({item}) => {

  const navigate = useNavigate()

  const Routing =(id)=>{
    navigate(`/shop/${id}`)
  }

  return (
    <Col lg='3' md='4' className='mb-2'>
      <div className='product_item'>
        <div className="product_img">
          <motion.img whileHover={{scale:0.9}} style={{cursor: "pointer"}} onClick={()=>Routing(item.id)} src={item.imgUrl} alt="" />
        </div>
        <h3 className="product_name">{item.productName}</h3>
        <span className='catagory'>{item.category}</span>
        <div className="Product_bottom">
            <span className='Product_Price'>${item.price}</span>
            <span className='add_cart'>
              <i className='ri-add-line'></i>
            </span>
        </div>
     </div>
    </Col>
  )
}

export default ProductCart