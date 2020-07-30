import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  height: 220px;
  min-width: 320px;
  border-radius: 5px;
  margin: 0 20px 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  flex: 1;
  transition: transform 0.2s;
  text-align: center;

  &:hover {
    transform: translate3d(10px, -10px, 0);
  }
`;
