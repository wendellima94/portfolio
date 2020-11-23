import styled from 'styled-components';

export const HeaderContainer = styled.header `
  height: 8vh;
  width: 100%;
  background-color: #fffc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
`
export const NameContainer = styled.div `
    width: 30vw;
    padding-left: 30px;
`
export const NameText = styled.span `
  left: 174px;
  color:  #BF360C;
  font-size: 16px;
` 
export const HeaderMenu = styled.ul `
  width: 30vw;
  display: flex;
  justify-content: space-evenly;
  
`
export const ListMenu = styled.li `
  /* border-radius: 10px 50px; */
  display: inline-block;
  padding: 10px;
  margin: 2px;
 
`
export const LinkMenu = styled.a `
  
`

export const LinkText = styled.div `
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
`
export const StyleTextCV = styled.span `
  font-size: 16px; 
  &:hover {
    color: rgb(0, 255, 200);
  }
`