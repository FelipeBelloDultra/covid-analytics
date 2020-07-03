import styled from 'styled-components';

/*
 ** SR - Select Region
 ** IF - Information
 ** IC - Information Cases
 */

export const Grid = styled.div`
  display: grid;

  grid-template-columns: auto auto 340px;
  grid-template-rows: 100px auto auto;

  grid-template-areas:
    'SR SR IF'
    'IC IC IF'
    'IC IC IF';

  height: 100vh;
`;
