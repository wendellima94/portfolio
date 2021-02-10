import styled from 'styled-components';

export const Container = styled.section`
  background-color: #8f2336;
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

`
export const TextStyle = styled.span `
  font-size: 24px;
  color: #fffffb;;
  display: flex;

  @media screen and (max-width: 500px) {
    text-align: center;
    padding: 20px 20px;


  }
`
export const IconsContainer = styled.div `
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: row;
    padding-bottom: 20px;
  }
`

export const ImgProfile = styled.img `
  height: 100%;
  @media screen and (max-width: 500px) {
    max-width: 100%
  }
`



// export const = styled.
// export const = styled.
// export const = styled.
// export const = styled.