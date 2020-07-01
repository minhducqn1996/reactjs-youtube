import React from 'react';
import '../css/App.css';
import Nav from './Nav';
import Home from './Home';
import Footer from './Footer'
import News from './News';
import NewDetail from './NewDetail';
import Contact from './Contact';

function App() {
  return (
    <div>
       <Nav />
       {/* <Home /> */}
       {/* <NewDetail /> */}
       <Contact />
       <Footer />
      {/* <News /> */}
    </div>
  );
}

export default App;
