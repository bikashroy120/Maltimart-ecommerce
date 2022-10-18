import React from 'react'
import logo from '../../assets/images/eco-logo.png'
import { Container,Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
        <Row>
            <div className='nav_wapper'>
                <div className='logo'>
                    <img src={logo} alt="" />
                    <div>
                        <h1>maltimart</h1>
                        <p>Since 1995</p>
                    </div>
                </div>

                <div className='nevigations'>
                    <ul className='menu'>
                        <li className="nav_item">
                            <NavLink to="/" >
                                Home
                            </NavLink>
                            <NavLink to="/shop" >
                                Shop
                            </NavLink>
                            <NavLink to="/cart" >
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav_icons">
                    <span><i class="ri-heart-line"></i></span>
                    <span><i class="ri-shopping-cart-2-line"></i></span>
                </div>
            </div>
        </Row>
    </Container>
  )
}

export default Header