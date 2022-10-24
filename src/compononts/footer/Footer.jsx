import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import './footer.css'

const Footer = () => {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col lg="4" md='6'>
            <div className="footer_box">
              <h2>maltimart</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                temporibus voluptatum tempore quaerat expedita eos ipsum
                impedit? Vitae, laboriosam totam.
              </p>
            </div>
          </Col>

          <Col lg="3" md='6'>
            <div className="footer_box">
              <h2>Top Category</h2>
                <ul>
                  <li>Mobile Phones</li>
                  <li>Modern Safa</li>
                  <li>Arm Chair</li>
                  <li>Smart Watches</li>
                </ul>
            </div>
          </Col>

          <Col lg="2" md='6'>
          <div className="footer_box">
              <h2>Useful Links</h2>
                <ul>
                  <li><Link to='/shop'>Shop</Link></li>
                  <li><Link to='/cart'>Cart</Link></li>
                  <li><Link to='/login'>Log In</Link></li>
                  <li><Link to='/'>Privacy Policy</Link></li>
                </ul>
            </div>
          </Col>

          <Col lg="3" md='6'>
            <div className="footer_box">
              <h2>Contact</h2>
              <span><i className="ri-map-pin-line"></i>
              <p>123 ZindaBazar,Sylhet,Bangladesh</p>
              </span>

              <span><i className="ri-phone-line"></i>
              <p>+0885457754452</p>
              </span>

              <span><i className="ri-mail-line"></i>
              <p>exjampol@gmail.com</p>
              </span>
            </div>
          </Col>
          {/* <Col lg='12' md='12'>
            <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, possimus.</span>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
