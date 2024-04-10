import styled from 'styled-components';

export const AppStyled = styled.div`
  text-align: center;

  header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  img {
    height: 40vmin;
    pointer-events: none;
  }
  a {
    color: #61dafb;
  }
`;
