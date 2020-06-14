import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className='footerContainer'>
      <Row>
        <Col xs={6} md={4}>
          <h5>Contact: ANSORAC@microsoft.com </h5>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
