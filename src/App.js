import React from 'react';
import FifthSection from './components/fifthSection/';
import FirstSection from './components/firstSection';
import FourthSection from './components/fourthSection';
import Header from './components/header';
import SecondSection from './components/secondSection';
import ThirdSection from './components/thirdSection';

import './style/global.css'


function App() {
  return (
    <div className="App">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
}

export default App;
