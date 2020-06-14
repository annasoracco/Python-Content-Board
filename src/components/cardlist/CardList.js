import React from 'react';
import InfoCard from '../infocard/InfoCard';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './cardlist.css';

const CardList = ({ cards, matched, searched, categories, selected, all }) => {
  return (
    <Container className='cardlist'>
      {searched ? (
        <Row>
          {matched.map((match) => (
            <Col xs={12} sm={6} md={6} lg={4} className='mt-4'>
              <InfoCard key={match.id} card={match} />
            </Col>
          ))}
        </Row>
      ) : selected ? (
        <Row>
          {categories.map((cats) => (
            <Col xs={12} sm={6} md={6} lg={4} className='mt-4'>
              <InfoCard key={cats.id} card={cats} />
            </Col>
          ))}
        </Row>
      ) : all ? (
        <Row>
          {cards.map((card) => (
            <Col xs={12} sm={6} md={6} lg={4} className='mt-4'>
              <InfoCard key={card.id} card={card} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          {cards.map((card) => (
            <Col xs={12} sm={6} md={6} lg={4} className='mt-4'>
              <InfoCard key={card.id} card={card} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

CardList.propTypes = {
  matched: PropTypes.array.isRequired,
  cards: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  selected: PropTypes.bool.isRequired,
  all: PropTypes.bool.isRequired,
};

export default CardList;
