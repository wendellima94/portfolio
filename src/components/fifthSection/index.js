import React from 'react';

import { Container, TitleText, ImgResolution, ButtonGit, ContainerProjetos } from './styled';

import TelaPC from '../../assets/telaPc.png';
import TelaPcDois from '../../assets/TelaPcDois.png';
import Tablet from '../../assets/tablet.png';
import Mouse from '../../assets/mouse.png';

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
          <ImgResolution src={TelaPcDois} alt="imagem-Tablet" />
          <h1>Astro Match </h1><br></br>
          <h3>Front-End</h3><br></br>
            <ButtonGit 
            href='https://github.com/wendellima94/AstroMatch' 
            target="_blank"
            >
              Ver no GitHub
            </ButtonGit>
          <ImgResolution src={Mouse} alt="imagem-Tablet" />
          <h1>Alura Quiz</h1><br></br>
          <h3>Front-End</h3><br></br>
            <ButtonGit 
            href='https://github.com/wendellima94/alura-quiz' 
            target="_blank"
            >
              Ver no GitHub
            </ButtonGit>
    </Container>
  )
}

export default FifthSection;