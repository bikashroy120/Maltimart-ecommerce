import React,{useRef,useEffect} from 'react'
import logo from '../../assets/images/eco-logo.png'
import { Container,Row } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import img from '../../assets/images/user-icon.png'
import './header.css'
import { useSelector } from 'react-redux'

const Header = () => {

    const cartItems = useSelector((state)=>state.cart.itemList);
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


    const headerRef = useRef(null);
    const nemuRef = useRef(null);

    const stickyHeaderFun = ()=>{
        window.addEventListener("scroll",()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('sticke_header')
            }else{
                headerRef.current.classList.remove('sticke_header')
            }
        })
    }


    useEffect(()=>{
        stickyHeaderFun();
        return ()=>window.removeEventListener("scroll",stickyHeaderFun)
    })

    const navTrogle = ()=>nemuRef.current.classList.toggle("mobil_show")

  return (
    <header className='header' ref={headerRef}>
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

                    <div className='nevigations' ref={nemuRef} onClick={navTrogle}>
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
                        <div className='fav_icons'>
                            <i className="ri-heart-line"></i>
                            <span className="fav-bega">
                                1
                            </span>
                        </div>
                        <div className='cart_icons'>
                            <i className="ri-shopping-cart-2-line"></i>
                            <span className="fav-bega">
                                {cartItems.length}
                            </span>
                        </div>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div className='mobile_nav' onClick={navTrogle}>
                            <span><i className='ri-menu-line'></i></span>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header