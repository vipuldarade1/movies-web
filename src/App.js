import './App.css';
import React from 'react';
import Createcard from './component/card';
import Footer from './component/footer';



class App extends React.Component {


  render() {

    return (
      <><Createcard></Createcard>
        <Footer></Footer>
      </>
    )
  }
}

export default App;
