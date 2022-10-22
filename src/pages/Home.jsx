import React from "react";
import Helmet from "../compononts/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import Services from "../compononts/Services/Services";

const Home = () => {
  const year = new Date().getFullYear();

  return (
    <Helmet title={"home"}>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="sub_title">Trending product in {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Voluptatum enim harum facere esse aperiam dolores hic non
                  tempora error inventore. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Tempore, dignissimos. Lorem
                  ipsum dolor sit amet.
                </p>
                <div className="button_area">
                  <button className="shop_button">Shop Now</button>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </Helmet>
  );
};

export default Home;
