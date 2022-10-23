import React,{useEffect,useState} from "react";
import Helmet from "../compononts/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import Services from "../compononts/Services/Services";
import products from '../assets/data/products'
import ProductList from "../compononts/UI/ProductList";
import countImg from "../assets/images/counter-timer-img.png"
import { Link } from "react-router-dom";
import Clock from "../compononts/clock/Clock";

const Home = () => {

  const [trendingProduct,settrendingProduct] = useState()
  const [bestSeles,setbestSeles] = useState()


  useEffect(()=>{
    const trindingFilter = products.filter((item)=>item.category === "chair")
    settrendingProduct(trindingFilter)


    const bestSelesFilter = products.filter((item)=>item.category === "sofa")
    setbestSeles(bestSelesFilter)
  },[])


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

      {/* Trending Product hear */}
      <section className="tringding_product">
        <Container>
          <Row>
            <Col lg='12' md='12' className="text-center">
              <h2 className="section_title">Trending Product</h2>
            </Col>
            <ProductList products={trendingProduct}/>
          </Row>
        </Container>
      </section>

      {/* bestSeles Product */}
      <section className="bestSeles_product">
        <Container>
          <Row>
            <Col lg='12' md='12' className="text-center">
              <h2 className="section_title">Best Seles</h2>
            </Col>
            <ProductList products={bestSeles}/>
          </Row>
        </Container>
      </section>


      {/* timer count */}
      <section className="timer_count">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                  <div className="clock_top_content mb-4">
                    <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                    <h3 className="text-white fs-5 mb-3">Quality Aramchair</h3>
                  </div>

                  <Clock />

                  <button className="shop_button timer_button mt-4"><Link to='/shop'>Visit Store</Link></button>
                </Col>
                <Col lg='6' md='6' className="text-end">
                    <img src={countImg} alt="" />
                </Col>
            </Row>
          </Container>
      </section>

    </Helmet>
  );
};

export default Home;
