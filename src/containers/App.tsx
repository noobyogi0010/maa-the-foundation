import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './navbar/navbar';
import Main from './main/main';

function App() {
  const [atPageTop, setAtPageTop] = React.useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.pageYOffset>0) {
        // console.log('>>>> Bye ', atPageTop, '\n===============');
        setAtPageTop(false);
      } else {
        setAtPageTop(true);
        // console.log('>>>> Hello ', atPageTop, '\n===============');
      }
    });
  });

  return (
    <div className="container">
      <Navbar props={{atPageTop}} />
      <Main />
    </div>
  );
}

export default App;
