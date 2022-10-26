import React, { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import './TabSection.css'
import img from '../../assets/images/user-icon.png'
import { Rating } from '@mui/material'

const TabSection = ({description,reviews}) => {

    const [state, setstate] = useState("dec")

    const tabadd = (data)=>{
        setstate(data)
    }

  return (
    <Container>
        <Row>
            <Col lg="12">
                <div className='tab_ber'>
                    <ul>
                        <li className={state==="dec"? "active" : ""} onClick={()=>tabadd("dec")}>Description</li>
                        <li className={state==="rev"? "active" : ""} onClick={()=>tabadd("rev")}>Reviews({reviews.length})</li>
                    </ul>
                </div>
            </Col>

            <Col lg="12">
                <div className='mt-5'>
                    {state === "dec" ? <p>{description}</p> :(<div>
                        {reviews && reviews.map((item,index)=>{
                            return(
                            <div className='revies_box' key={index}>
                                <div className='review_top'>
                                    <img src={img} alt="" />
                                    <h2>Jone Deo</h2>
                                </div>
                                <div className='header_buttom'>
                                     <Rating name="read-only" value={item.rating} readOnly />
                                     <p>{item.text}</p>
                                </div>
                            </div>
                            )
                        })}
                    </div>)}
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default TabSection