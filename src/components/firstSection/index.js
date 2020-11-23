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
            <ImgProfile class="img-profile" src={Perfil} alt="img-profile"  />
            <div class="name-info">
                <TextStyle>Eu sou <br/>Wendel de Lima</TextStyle><br/>
                <TextStyle>Desenvolvedor Web Full Stack</TextStyle>
            </div>
            <IconsContainer class="icons">
                <a href="https://github.com/wendellima94" target="_blank">
                    <img src={GitIcon} alt="git-icon"  /></a>
                <a href="https://www.linkedin.com/in/wendel-de-lima-74b6b01a1/" target="_blank">
                    <img src={LinkedinIcon} alt="linkedin-icon" /></a>

                {/* <a href="" target="_blank">
                    <img src={WhatsaAppIcon} alt="whatsapp-icon" /></a> */}
                    
            </IconsContainer>
        </Container>
    </div>
  )
}

export default FirstSection;