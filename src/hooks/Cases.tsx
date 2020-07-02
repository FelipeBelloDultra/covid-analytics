import React, { createContext, useState, useCallback, useContext } from 'react';
import api from '../utils/api';
import SnackError from '../components/SnackError';

interface Data {
  confirmed: number;
  deaths: number;
  lastUpdate: string;
  recovered: number;
  region: string;
}

interface GetRegionData {
  region: string;
}

interface CasesContextData {
  informationsValues: object;
  getInformationsData(region: GetRegionData): Promise<void>;
}

const CasesContext = createContext<CasesContextData>({} as CasesContextData);

const CasesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Data>({} as Data);
  const [open, setOpen] = useState<boolean>(false);

  const getInformationsData = useCallback(async ({ region }) => {
    try {
      const response = await api.get(`/countries/${region}`);

      const { confirmed, deaths, lastUpdate, recovered } = response.data;

      setData({
        confirmed: confirmed.value,
        deaths: deaths.value,
        lastUpdate,
        recovered: recovered.value,
        region
      })
    } catch (error) {
      setOpen(true);

      setTimeout(() => {
        setOpen(false);
      }, 2500);
    }
  }, []);

  return (
    <CasesContext.Provider value={{ informationsValues: data, getInformationsData }}>
      {children}
      <SnackError open={open} />
    </CasesContext.Provider>
  );
}

function useRegion(): CasesContextData {
  const context = useContext(CasesContext);

  if (!context) {
    throw new Error('useRegion must be used within an CasesProvider');
  }

  return context;
}

export { CasesProvider, useRegion };
