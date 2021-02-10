import styled from 'styled-components';


export const Container = styled.section `
  height: 50vh;
  width: 100%;
  background-color: #d97824;

  display: flex;
  color: #fffffb;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  @media screen and (max-width: 500px) {  
  text-align: center;
  }
`
