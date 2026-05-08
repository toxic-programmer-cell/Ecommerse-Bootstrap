import React from "react";
import { Button, Card } from "react-bootstrap";

const ProductCardScreen = ({ product }) => {
  const { title, category, price, brand, images, rating } = product;
  return (
    <Card className="rounded my-3 border border-1">
      <a href="" className="text-decoration-none">
        <Card.Img
          variant="top"
          src={images}
          className="border-1 border-bottom "
        />
      </a>

      <Card.Body className="">
        <a href="">
          <Card.Title>
            <strong>{title}</strong>
          </Card.Title>
        </a>
        <Card.Text as={"h6"}><strong>category:</strong> {category}</Card.Text>
        <Card.Text as={"h5"}>⭐{rating}</Card.Text>
        <Card.Text as={"h6"}>${price}</Card.Text>

        <Button type="button" className="btn btn-success">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCardScreen;
