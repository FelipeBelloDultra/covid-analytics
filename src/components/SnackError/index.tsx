import React from 'react';

import { Container, HeaderInfo, ContentInfo } from './styles';

export interface Props {
  open: boolean;
  message?: string;
}

const SnackError: React.FC<Props> = ({ open, message }) => {

  console.log(open);

  return (
    <Container
      open={open}
    >
      <HeaderInfo>
        <h3>Ops...</h3>
        <span role="img" aria-label="bad">😨</span>
      </HeaderInfo>
      <ContentInfo>
        <p>{message ? message : 'Sinto muito, algo inesperado aconteceu...'}</p>
      </ContentInfo>
    </Container>
  );
}

export default SnackError;
