import styled from 'styled-components';

export const Container = styled.div `
  display: flex;
  align-self: center;
  justify-content: center;
  background-color: #f2f2f2;

`

export const SectionContainer = styled.section `
  background-color: #f2f2f2;
  height: 100vh;
  width: 60vh;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
  flex-direction: column;
`

export const ContainerProjetos = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ImgResolution = styled.img `
  width: 96px;
  height: 96px;
  padding-right: 18px;
`
export const ButtonGit = styled.a `
  padding: 8px 8px;
  border-radius: 16px;
  text-align: center;
  background-color: #ff0030;
  color: #fffd;
`