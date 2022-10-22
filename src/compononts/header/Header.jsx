import React from 'react'
import logo from '../../assets/images/eco-logo.png'
import { Container,Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import img from '../../assets/images/user-icon.png'
import './header.css'

const Header = () => {


    const nav_links = [
        {
            name :"Home",
            path :"/"
        },
        {
            name :"Shop",
            path :"/shop"
        },
        {
            name :"Cart",
            path :"/cart"
        }
    ]

  return (
    <header>
        <Container>
            <Row>
                <div className='nav_wapper'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                        <div className='content'>
                            <h1>maltimart</h1>
                            {/* <p>Since 1995</p> */}
                        </div>
                    </div>

                    <div className='nevigations'>
                        <ul className='menu'>
                            {
                                nav_links.map((item,index)=>(
                                    <li className="nav_item" key={index}>
                                    <NavLink to={item.path} className={(nav_Class)=>nav_Class.isActive ? "nav_active" : ''} >
                                        {item.name}
                                    </NavLink>
                                </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="nav_icons">
                        <span className='fav_icons'>
                            <i class="ri-heart-line"></i>
                            <span className="fav-bega">
                                1
                            </span>
                        </span>
                        <span className='cart_icons'>
                            <i class="ri-shopping-cart-2-line"></i>
                            <span className="fav-bega">
                                1
                            </span>
                        </span>
                        <span>
                            <img src={img} alt="" />
                        </span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header