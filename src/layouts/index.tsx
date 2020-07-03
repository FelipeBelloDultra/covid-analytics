import React from 'react';

import { Grid } from './styles';
import SelectRegion from '../components/SelectRegion';
import Information from '../components/Information';
import InformationCases from '../components/InformationCases';

const Layout: React.FC = () => {
  return (
    <Grid>
      <SelectRegion />
      <Information />
      <InformationCases />
    </Grid>
  );
};

export default Layout;
