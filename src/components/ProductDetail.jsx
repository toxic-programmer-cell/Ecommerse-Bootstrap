import React from "react";
import { Link, useParams } from "react-router-dom";
import products from "../product";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { formatCurrency, getDiscountedPrice } from "../utils/pricing";

const ProductDetail = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  const discountedPrice = product
    ? getDiscountedPrice(product.price, product.discountPercentage)
    : null;

// Review logic once
  const formatReviewDate = (isoString) => {
    const d = new Date(isoString);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div>
      <Link to={"/"} className="btn btn-dark my-3">
        {" "}
        {"\u2190"} Back{" "}
      </Link>
      {!product ? (
        <div className="alert alert-warning">Product not found.</div>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              className="border border-1 shadow-lg"
              src={product.images}
              alt={product.title}
              thumbnail
            />
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title as={"h3"} className="mb-3">
                  <strong>{product.title}</strong>
                </Card.Title>
                <Card.Subtitle className="mb-3 text-muted">
                  <strong>Brand: </strong>
                  {product.brand}
                </Card.Subtitle>
                <Card.Subtitle className="mb-3 text-muted">
                  <strong>Catagory: </strong>
                  {product.category}
                </Card.Subtitle>
                <Card.Text className="mb-4" as={"h5"}>
                  ⭐{product.rating}
                </Card.Text>

                <Card.Text className="mb-4">{product.description}</Card.Text>
                {discountedPrice ? (
                  <Card.Text as={"div"} className="mb-3">
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <strong className="text-danger fs-4">
                        {formatCurrency(discountedPrice)}
                      </strong>
                      <span className="text-muted text-decoration-line-through">
                        {formatCurrency(product.price)}
                      </span>
                      <span className="badge bg-success">
                        {Math.round(Number(product.discountPercentage))}% OFF
                      </span>
                    </div>
                  </Card.Text>
                ) : (
                  <Card.Text as={"h6"}>
                    {formatCurrency(product.price)}
                  </Card.Text>
                )}
                <ListGroup>
                  <ListGroup.Item>
                    <button className="btn btn-warning m-2">Add to cart</button>

                    <button
                      className="btn btn-success m-2"
                      disabled={!product.stock}
                    >
                      Buy now
                    </button>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Text className="mb-4">
                  {product.stock ? (
                    ""
                  ) : (
                    <strong className="text-danger">Out of Stock</strong>
                  )}
                </Card.Text>

                {/* Reviews */}
                <hr className="border border-2" />
                <Card.Title as="h5" className="mb-3">
                  Customer Reviews
                </Card.Title>

{/* Review logic once */}
                {Array.isArray(product.reviews) && product.reviews.length ? (
                  <ListGroup variant="flush">
                    {product.reviews.map((review, idx) => (
                      <ListGroup.Item key={`${review.reviewerEmail}-${idx}`}>
                        <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
                          <div>
                            <strong>{review.reviewerName}</strong>
                            <div className="text-muted" style={{ fontSize: 14 }}>
                              {review.reviewerEmail}
                            </div>
                          </div>
                          <div className="text-muted" style={{ fontSize: 14 }}>
                            {formatReviewDate(review.date)}
                          </div>
                        </div>

                        <div className="mt-2">
                          <strong>⭐ {review.rating}</strong>
                        </div>
                        <div className="mt-1">{review.comment}</div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                ) : (
                  <div className="text-muted">No reviews yet.</div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetail;
