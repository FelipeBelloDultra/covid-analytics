import React, { useState, useEffect, ChangeEvent } from 'react';

import { Container, Select } from './styles';
import api from '../../utils/api';
import SnackError from '../SnackError';

interface Data {
  name: string;
  id: number;
}

const SelectRegion: React.FC = () => {
  const [countries, setCountries] = useState<Data[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  const [countriesValue, setCountriesValue] = useState<string>('0');

  useEffect(() => {
    api.get('/countries')
      .then((response) => {
        const { countries } = response.data;

        const country = countries.map((country: { name: string }, index: number) => ({
          name: country.name, id: index + 1
        }));

        setCountries(country);
      })
      .catch(() => {
        setOpen(true)

        setTimeout(() => {
          setOpen(false);
        }, 2500);
      });
  }, []);

  useEffect(() => {
    if (countriesValue !== '0') {
      api.get(`/countries/${countriesValue}`)
        .then((response) => {
          console.log(response.data);
        })
        .catch(() => {
          setOpen(true)

          setTimeout(() => {
            setOpen(false);
          }, 2500);
        });
    }
  }, [countriesValue]);

  function handleSelectCountry(event: ChangeEvent<HTMLSelectElement>) {
    const country = event.target.value;

    setCountriesValue(country);
  }

  return (
    <Container>
      <Select
        value={countriesValue}
        onChange={handleSelectCountry}
      >
        <option
          value="0"
        >
          Select a Country...
          </option>
        {countries.map((countrie, i) => (
          <option
            key={i}
            value={countrie.name}
          >
            {countrie.name}
          </option>
        ))}
      </Select>
      <SnackError
        open={open}
      />
    </Container>
  );
}

export default SelectRegion;
