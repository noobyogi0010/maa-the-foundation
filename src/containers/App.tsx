import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Main from './main/main';
import Numbers from './numbers/numbers';
import OurMission from './ourMission/ourMission';
import AboutUs from './aboutUs/aboutUs';
import OurTeam from './ourTeam/ourTeam';
import ContactUs from './contactUs/contactUs';

function App() {
  const [atPageTop, setAtPageTop] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset>0) {
        setAtPageTop(false);
      } else {
        setAtPageTop(true);
      }
    });
  });

  return (
    <div className="flex flex-col">
      <Navbar props={{atPageTop}} />
      <Main />
      <Numbers />
      <OurMission />
      <AboutUs />
      <OurTeam />
      <ContactUs />
    </div>
  );
}

export default App;
