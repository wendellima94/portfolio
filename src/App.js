import React from 'react';
import FifthSection from './components/fifthSection/';
import FirstSection from './components/firstSection';
import FourthSection from './components/fourthSection';
import Header from './components/header';
import SecondSection from './components/secondSection';
import ThirdSection from './components/thirdSection';
import styled from 'styled-components';

import './style/global.css'

const Container = styled.div `

  @media screen and (max-width: 500px) {
    margin: 0;
  }
  @media only screen 
    and (device-width : 375px) 
    and (device-height : 812px) 
    and (-webkit-device-pixel-ratio : 3) { };
    @media only screen 
    and (device-width : 414px) 
    and (device-height : 736px) 
    and (-webkit-device-pixel-ratio : 3) { };
    @media only screen 
    and (device-width : 360px) 
    and (device-height : 640px) 
    and (-webkit-device-pixel-ratio : 3) { };
`

function App() {
  return (
    <Container className="App">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </Container>
  );
}

export default App;
