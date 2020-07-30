import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px 0;
  background: var(--background);
  text-align: center;

  header {
    width: 1280px;
    margin: 0 auto;
    padding: 0 0 160px;
    height: 200px;

    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > section {
      user-select: none;

      > p {
        text-align: center;
        color: var(--white);

        line-height: 25px;
        font-size: 20px;
      }

      > h2 {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        color: var(--white-smoke);
        margin-bottom: 10px;
      }
    }
  }
`;
