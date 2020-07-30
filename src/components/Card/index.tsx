import React from 'react';

import { Container } from './styles';

interface CardProps {
  title: string;
  value: number;
  className: string;
}

const Card: React.FC<CardProps> = ({ value, title, className }) => {
  return (
    <Container className={className}>
      <h1>{title}</h1>
      <p>{value || '0'}</p>
    </Container>
  );
};

export default Card;
