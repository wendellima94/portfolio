import React from 'react';

import { Container, TextStyle,TextSkillsStyle, TitleStyle, ImgStyle } from './styled';
import ImagemPC from '../../assets/img-pc.png';

const SecondSection = () => {
  return (
    <div>
      <Container>       
        <div>
          <TitleStyle>Sobre mim</TitleStyle>
          
          <TextStyle>
            Olá, me chamo Wendel sou apaixonado por <br></br>
            organização vida simples e tecnologia<br></br>
            gosto de ir a praia para caminhar<br></br>
            ouvir musica pra relaxar, esportes e animais.<br></br><br></br>

            O talento vence jogos, mas só o trabalho em equipe ganha campeonatos.<br></br>  
            Michael Jordan.
          </TextStyle><br></br>

          <TextSkillsStyle>NodeJs </TextSkillsStyle>
          <TextSkillsStyle>MySQL </TextSkillsStyle>
          <TextSkillsStyle>HTML </TextSkillsStyle>
          <TextSkillsStyle>CSS </TextSkillsStyle>
          <TextSkillsStyle>JavaScript</TextSkillsStyle>
          <TextSkillsStyle>ReactJs</TextSkillsStyle>
        </div>
          <ImgStyle class="img-pc" src={ImagemPC} alt="img-pc" />
        </Container>
    </div>
  )
}

export default SecondSection;