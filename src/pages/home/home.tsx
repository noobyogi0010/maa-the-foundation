import React, {useEffect} from 'react';
import Navbar from '../../containers/navbar/navbar';
import Main from '../../containers/main/main';
import Numbers from '../../containers/numbers/numbers';
import OurMission from '../../containers/ourMission/ourMission';
import AboutUs from '../../containers/aboutUs/aboutUs';
import OurTeam from '../../containers/ourTeam/ourTeam';
import ContactUs from '../../containers/contactUs/contactUs';

function Home() {
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
    )
}

export default Home;