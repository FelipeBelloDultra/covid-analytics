import React, { useState, useEffect, ChangeEvent, useCallback } from 'react';

import { Container, Select } from './styles';
import api from '../../utils/api';
import SnackError from '../SnackError';

import { useRegion } from '../../hooks/Cases';

interface Data {
  name: string;
  id: number;
}

const SelectRegion: React.FC = () => {
  const [countriesColettion, setCountries] = useState<Data[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const { getInformationsData } = useRegion();

  const [countriesValue, setCountriesValue] = useState<string>('0');

  const getDataValues = useCallback(async () => {
    try {
      const response = await api.get('/countries');

      const { countries } = response.data;

      const country = countries.map(
        (countrie: { name: string }, index: number) => ({
          name: countrie.name,
          id: index + 1,
        }),
      );

      setCountries(country);
    } catch (error) {
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }
  }, []);

  const handleSelectCountry = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const country = event.target.value;

      setCountriesValue(country);
    },
    [],
  );

  useEffect(() => {
    getDataValues();
  }, [getDataValues]);

  useEffect(() => {
    if (countriesValue !== '0') {
      getInformationsData({ region: countriesValue });
    }
  }, [countriesValue, getInformationsData]);

  return (
    <Container>
      <Select value={countriesValue} onChange={handleSelectCountry}>
        <option value="0">Selecione uma região...</option>
        {countriesColettion.map(countrie => (
          <option key={countrie.id} value={countrie.name}>
            {countrie.name}
          </option>
        ))}
      </Select>
      <SnackError open={open} />
    </Container>
  );
};

export default SelectRegion;
