import React from 'react';

import { Container, TitleText, ImgResolution, ButtonGit, ContainerProjetos } from './styled';

import TelaPC from '../../assets/telaPc.png';
import Tablet from '../../assets/tablet.png';

const FifthSection = () => {
  return (
    <Container>
      <TitleText>Meus Projetos</TitleText>

        <ImgResolution src={TelaPC} alt="imagem-TelaPc" />
        <ContainerProjetos>
          <h1>Pokedex</h1><br></br>
          <h3>Front-End</h3><br></br>           
          <ButtonGit 
            href='https://github.com/wendellima94/Pokedex' 
            target="_blank">
            Ver no GitHub
          </ButtonGit>    
        </ContainerProjetos>

          <ImgResolution src={Tablet} alt="imagem-Tablet" />
          <h1>Urna eletrônica </h1><br></br>
          <h3>Front-End</h3><br></br>
            <ButtonGit 
            href='https://github.com/wendellima94/Urna-eletronica/tree/urnaEletronica' 
            target="_blank"
            >
              Ver no GitHub
            </ButtonGit>
    </Container>
  )
}

export default FifthSection;