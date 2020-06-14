import React from 'react';
import './infocard.css';

import PropTypes from 'prop-types';

import { Card } from 'react-bootstrap';

const InfoCard = ({ card: { title, text, image, link } }) => {
  return (
    <div>
      <Card>
        <a href={link} rel='noopener noreferrer' target='_blank'>
          <Card.Img className='image' variant='top' src={image} />
        </a>
        <Card.Body>
          <Card.Title className='title'>{title}</Card.Title>
          <Card.Text className='text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

InfoCard.propTypes = {
  card: PropTypes.object.isRequired,
};

export default InfoCard;
