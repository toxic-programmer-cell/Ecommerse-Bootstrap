import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../product";
import ProductCardScreen from "./screens/ProductCardScreen";

const Home = () => {
  return (
    <div>
      <h1 className="text-center px-2 py-3">Latest Product</h1>

      {products.length ? (
        <Row>
          {products.map((product) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCardScreen product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <i className="text-center">No Product Avalible</i>
      )}
    </div>
  );
};

export default Home;
