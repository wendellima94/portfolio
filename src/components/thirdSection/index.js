import React from 'react';

import { Container, TextContainer, TitleContainer, TitleStyle, TextStyle } from './styled';

const ThirdSection = () => {
  return (
    <div>
      <TitleContainer>
          <TitleStyle>Meus conhecimentos</TitleStyle> 
        </TitleContainer>
      <Container>  
         <TextContainer>
          <div>
            <TitleStyle>Front-end</TitleStyle><br></br>
            <TextStyle>
              Desenvolvemento de aplicações web <br></br>
              ultilizando HTML, CSS e JavaScript.<br></br>
              Criação de sites responsivos seguindo<br></br>
              o principio de Mobile first
            </TextStyle>
          </div>
          <div>
            <TitleStyle>Back-end</TitleStyle><br></br>
            <TextStyle>
              Apicações ultilizando o NodeJs<br></br>
              TypeScript e MySQL<br></br>
              Criação de API's para<br></br>
              comunicação com o front-end<br></br>
              seguindo os principios de Clean Code.<br></br>
            </TextStyle>
          </div>
        </TextContainer>
      </Container>
    </div>
  )
}

export default ThirdSection;