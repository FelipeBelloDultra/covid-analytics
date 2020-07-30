import React, { useMemo } from 'react';

import { Container } from './styles';

import SelectRegion from '../SelectRegion';

interface RegionsData {
  region: string;
  lastUpdate?: Date;
}

const Header: React.FC<RegionsData> = ({ lastUpdate, region }) => {
  const hoursUpdate = useMemo(() => {
    if (lastUpdate) {
      return lastUpdate.toLocaleTimeString();
    }
  }, [lastUpdate]);

  const dateUpdate = useMemo(() => {
    if (lastUpdate) {
      return lastUpdate.toLocaleDateString();
    }
  }, [lastUpdate]);

  return (
    <Container>
      <header>
        <SelectRegion />

        <section>
          <h2>Região: {region}</h2>
        </section>

        <section>
          <p>
            Atualizado dia <strong>{dateUpdate || '00/00/0000'}</strong>
          </p>
          <p>
            ás <strong>{hoursUpdate || '00:00:00'}</strong>
          </p>
        </section>
      </header>
    </Container>
  );
};

export default Header;
