import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { formatCurrency, getDiscountedPrice } from "../../utils/pricing";

const ProductCardScreen = ({ product }) => {
  const { id, title, category, price, images, rating, discountPercentage } =
    product;
  const discountedPrice = getDiscountedPrice(price, discountPercentage);
  return (
    <Card className="rounded my-3 border border-1">
      <Link to={`/product/${id}`} className="text-decoration-none">
        <Card.Img
          variant="top"
          src={images}
          className="border-1 border-bottom "
        />
      </Link>

      <Card.Body className="">
        <Link to={`/product/${id}`}>
          <Card.Title>
            <strong>{title}</strong>
          </Card.Title>
        </Link>
        <Card.Text as={"h6"}>
          <strong>category:</strong> {category}
        </Card.Text>
        <Card.Text as={"h5"}>⭐{rating}</Card.Text>
        {discountedPrice ? (
          <Card.Text as={"div"} className="mb-2">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <strong className="text-danger">
                {formatCurrency(discountedPrice)}
              </strong>
              <span className="text-muted text-decoration-line-through">
                {formatCurrency(price)}
              </span>
              <span className="badge bg-success">
                {Math.round(Number(discountPercentage))}% OFF
              </span>
            </div>
          </Card.Text>
        ) : (
          <Card.Text as={"h6"}>{formatCurrency(price)}</Card.Text>
        )}

        <Link to={`/product/${id}`}>
          <Button type="button" className="btn btn-success">
            View Details
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductCardScreen;
