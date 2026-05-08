import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center p-5">
            Copyright @Copy; DevRohit.in
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer