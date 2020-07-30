import styled from 'styled-components';

export const Container = styled.div`
  background: var(--white);
  min-height: 220px;
  min-width: 300px;
  border-radius: 5px;
  margin: 0 20px 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  flex: 1;
  transition: transform 0.2s;
  text-align: center;
  user-select: none;
  padding: 0 10px 50px;

  > h1 {
    margin: 5px 0;
    padding-bottom: 5px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }

  > p {
    margin-top: 50px;
    font-weight: bold;
    font-size: 25px;
    word-break: break-all;
  }

  &.confirmed {
    > h1 {
      color: var(--background-info);
    }
  }

  &.deaths {
    > h1 {
      color: var(--error-info);
    }
  }

  &.recovered {
    > h1 {
      color: var(--recovered-info);
    }
  }

  &:hover {
    transform: translate3d(10px, -10px, 0);
  }
`;
