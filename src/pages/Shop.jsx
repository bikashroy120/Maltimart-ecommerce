import React, { useState } from "react";
import Helmet from "../compononts/helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import CommongSection from "../compononts/UI/CommongSection";
import "../styles/shop.css";
import products from "../assets/data/products";
import ProductList from "../compononts/UI/ProductList";

const Shop = () => {
  const [productData, setproductData] = useState(products);


  const catagoryFilter = (e)=>{
    const filterItem = e.target.value;
    if(filterItem==="all"){
      setproductData(products)
    }else{
      const filterProduct = products.filter((item)=> item.category === filterItem)
      setproductData(filterProduct)
    }
  }

  const hendalSearch = (e) => {
    const searchtrem = e.target.value;
    const searchProduct = products.filter(
      (item) =>
        item.productName.toLowerCase().includes(searchtrem.toLowerCase()) ||
        item.category.toLowerCase().includes(searchtrem.toLowerCase())
    );
    setproductData(searchProduct);
  };

  return (
    <Helmet title={"shop"}>
      <CommongSection title={"Product"} />
      <section className="shop_section">
        <Container>
          <Row>
            <Col lg="3">
              <div className="filter_widget">
                <select onChange={catagoryFilter}>
                  <option value={"all"}>Filter by Category</option>
                  <option value="mobile">Mobile</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3">
              <div className="filter_widget">
                <select>
                  <option value={"all"}>Filter by Category</option>
                  <option value="mobile">Mobile</option>
                  <option value="sofa">Sofa</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="6">
              <div className="search_box">
                <input
                  type="text"
                  placeholder="Search........"
                  onChange={hendalSearch}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productData.length === 0 ? (
              <h1>Product Not Found!..</h1>
            ) : (
              <ProductList products={productData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
