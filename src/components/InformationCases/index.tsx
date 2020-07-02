import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import { useRegion } from '../../hooks/Cases';

interface RegionsData {
  confirmed: number;
  deaths: number;
  recovered: number;
  region: string;
  lastUpdate: Date;
}

const InformationCases: React.FC = () => {
  const { informationsValues } = useRegion();

  const [data, setData] = useState<RegionsData>(informationsValues as RegionsData);

  useEffect(() => {
    setData(informationsValues as RegionsData)
  }, [informationsValues]);

  return (
    <Container>
      <h1>Confirmed: {data.confirmed}</h1>
      <h1>Deaths: {data.deaths}</h1>
      <h1>Recovered: {data.recovered}</h1>
      <h1>Region: {data.region}</h1>
      <h1>Last Update: {data.lastUpdate && new Date(data.lastUpdate).toLocaleDateString()}</h1>
    </Container>
  );
}

export default InformationCases;
