import styled from 'styled-components';

import { Props } from '.';

export const Container = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  transition: all 0.3s;

  position: fixed;
  right: ${props => (props.open ? '20px' : '-350px')};
  top: 20px;

  z-index: 3;
`;

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--error);

  padding: 10px 10px 10px 10px;
  border-radius: 5px 5px 0 0;

  width: 100%;
  height: 100%;

  > h3 {
    color: var(--white);
  }
`;

export const ContentInfo = styled.div`
  background-color: var(--error-info);

  padding: 10px 10px 10px 10px;
  border-radius: 0 0 5px 5px;

  width: 100%;
  height: 100%;

  > p {
    color: var(--white);
  }
`;
