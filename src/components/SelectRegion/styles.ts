import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SR;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--background);
`;

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  background: var(--white-smoke);
  border: 3px solid var(--white-smoke);

  transition: border 0.2s;
  cursor: pointer;

  &:hover {
    border: 3px solid var(--background-info);
  }

  max-width: 300px;
  width: 100%;

  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;

  color: var(--black);
  font-weight: bold;
`;
