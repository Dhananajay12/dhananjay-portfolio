
import React from 'react';
import Aboutus from './Components/Aboutus';
// import Contact from './Components/Contact';
import Fetures from './Components/Fetures';
import Home from './Components/Home';
import Navbars from './Components/Navbars';
import Projects from './Components/Projects';


function App() {
  return (
    <div className="App" >
      <Navbars/>
      <Home/>
      <Fetures></Fetures>
      <Aboutus/>
      <Projects></Projects>
      
  
     

    </div>
  );
}

export default App;
