import styled from 'styled-components';

export const Container = styled.section `
  background-color: #21666e;
  height: 50vh;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 30px;

 
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 40px 0px;
    text-align: center;
    display: flex;
    justify-content: space-around;
}

`
export const TextDiv = styled.div`
  @media screen and (max-width: 500px) {
    padding-left: 20px;
  }
`
export const TextSkillsStyle = styled.span `
  color: #fffffb;
  text-decoration: none;
  font-size: 14px;
  border-left: 3px solid #fffffb;
  padding: 0px 6px 0px 2px;

`

export const TitleStyle = styled.h1 `
  color: #fffffb;
  text-decoration: none;
`

export const TextStyle = styled.p `
  color: #fffffb;
  text-decoration: none;
`

export const ImgStyle = styled.img `
  width: 240px;
  height: 240px;
  color: #000;
`