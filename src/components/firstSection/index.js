import React from 'react';
import { Container, TextStyle, IconsContainer, ImgProfile } from './styled';

import GitIcon from '../../assets/github.png';
import LinkedinIcon from '../../assets/linkedin.png';
// import WhatsaAppIcon from '../../assets/whatsapp.png';
import Perfil from '../../assets/perfil.png';

const  FirstSection = () => {
  return (
    <div>
      <Container>
            <ImgProfile src={Perfil} alt="img-profile" />
            
                <TextStyle>Olá, eu sou <br/>Wendel de Lima <br/> Desenvolvedor Web Full Stack</TextStyle><br/>
                <IconsContainer>
                <a href="https://github.com/wendellima94" target="_blank" rel="noreferrer">
                    <img src={GitIcon} alt="git-icon"  /></a>
                <a href="https://www.linkedin.com/in/wendel-de-lima-74b6b01a1/" target="_blank" rel="noreferrer">
                    <img src={LinkedinIcon} alt="linkedin-icon" /></a>

                {/* <a href="" target="_blank">
                    <img src={WhatsaAppIcon} alt="whatsapp-icon" /></a> */}
                    
            </IconsContainer>
           
        </Container>
    </div>
  )
}

export default FirstSection;