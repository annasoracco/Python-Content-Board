import React from 'react';
import InfoCard from '../../infocard/InfoCard';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './cardlist.css';

const CardList = ({ cards }) => {
  return (
    <Container className='cardlist'>
      <Row>
        {cards.map((card) => (
          <Col>
            <InfoCard key={card.id} card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

CardList.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default CardList;
