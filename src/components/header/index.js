import React from 'react';

import { HeaderContainer, NameText, HeaderMenu, StyleTextCV, NameContainer, LinkText } from './styled.js'
import CV from '../../assets/cv.png'

const Header = () => {
  return (
    <HeaderContainer>
      <NameContainer>
      <NameText>Wendel</NameText>
      </NameContainer>
      <HeaderMenu>
      <LinkText>
          <StyleTextCV>Meu currículo em <strong>PDF</strong></StyleTextCV>
            <a 
            href='https://drive.google.com/file/d/1qeaOtutLSeKYweSnKqQK6jmSTrmKJswI/view?usp=sharing'
            rel="noreferrer"
            target="_blank" >  
              <img src={CV} alt="cv-img" />
            </a>
      </LinkText>
      </HeaderMenu>
    </HeaderContainer>
  )
}

export default Header;
