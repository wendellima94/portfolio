import React from 'react';

import { Container, ContainerProjetos, ImgResolution, ButtonGit, SectionContainer } from './styled';

import TelaPC from '../../assets/telaPc.png';
import Tablet from '../../assets/tablet.png';

const FifthSection = () => {
  return (
    <Container>
      <SectionContainer>
      <h2>Meus Projetos</h2>

      <ContainerProjetos>
        
          <ImgResolution src={TelaPC} alt="imagem-TelaPc" />
          <div>
            <h1>Pokedex</h1><br></br>
            <h3>Front-End</h3><br></br>
            
          <ButtonGit 
          href='https://github.com/wendellima94/Pokedex' 
          target="_blank">
            Ver no GitHub
          </ButtonGit>
        
        </div>
        </ContainerProjetos>
        <ContainerProjetos>
          <ImgResolution src={Tablet} alt="imagem-Tablet" />
          <div>
            <h1>Urna eletrônica </h1><br></br>
            <h3>Front-End</h3><br></br>
            {/* <p> 
              Urna eletrônica com as funcionabilidades de votar para Vereador e Prefeito<br></br>
              e uma mensagem de FIM ao término da votação<br></br>
              ela retorna no final dos votos um array no console<br></br>
              informando os dados dos candidatos escolhidos<br></br>
              (caso em branco retorna a informação do voto em branco)<br></br>
              o script de etapa.js guarda todas informações dos candidatos<br></br>
              as funções e as variaveis de ambiente estão em script.js</p><br></br> */}
              <ButtonGit 
              href='https://github.com/wendellima94/Urna-eletronica/tree/urnaEletronica' 
              target="_blank"
              >
                Ver no GitHub
              </ButtonGit>

          </div>        
        </ContainerProjetos>
      </SectionContainer>
    </Container>
  )
}

export default FifthSection;