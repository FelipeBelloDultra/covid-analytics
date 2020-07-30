import React, { useState, useEffect, useMemo } from 'react';
import { parseISO } from 'date-fns';

import Header from '../components/Header';
import Card from '../components/Card';

import { useRegion } from '../hooks/Cases';

import { Container, CardContent } from './styles';

interface RegionsData {
  confirmed: number;
  deaths: number;
  recovered: number;
  region: string;
  lastUpdate: string;
}

const Layout: React.FC = () => {
  const { informationsValues } = useRegion();

  const [data, setData] = useState<RegionsData>(
    informationsValues as RegionsData,
  );

  useEffect(() => {
    setData(informationsValues as RegionsData);
  }, [informationsValues]);

  const updateRegion = useMemo(() => {
    if (data.lastUpdate) {
      const date = parseISO(data.lastUpdate);

      return date;
    }
  }, [data.lastUpdate]);

  return (
    <Container>
      <Header lastUpdate={updateRegion} region={data.region} />

      <CardContent>
        <Card
          title="Confirmados"
          value={data.confirmed}
          className="confirmed"
        />
        <Card title="Mortes" value={data.deaths} className="deaths" />
        <Card
          title="Recuperados"
          value={data.recovered}
          className="recovered"
        />
      </CardContent>
    </Container>
  );
};

export default Layout;
