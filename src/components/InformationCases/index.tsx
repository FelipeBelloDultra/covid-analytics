import React from 'react';

import { Container } from './styles';

import { useRegion } from '../../hooks/Cases';

const InformationCases: React.FC = () => {
  const { informationsValues } = useRegion();

  console.log(informationsValues);

  return (
    <Container>
    </Container>
  );
}

export default InformationCases;
