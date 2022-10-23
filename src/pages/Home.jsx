import React,{useEffect,useState} from "react";
import Helmet from "../compononts/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import Services from "../compononts/Services/Services";
import products from '../assets/data/products'
import ProductList from "../compononts/UI/ProductList";

const Home = () => {

  const [trendingProduct,settrendingProduct] = useState()
  const [bestSeles,setbestSeles] = useState()


  useEffect(()=>{
    const trindingFilter = products.filter((item)=>item.category === "chair")
    settrendingProduct(trindingFilter)
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
    </Helmet>
  );
};

export default Home;
