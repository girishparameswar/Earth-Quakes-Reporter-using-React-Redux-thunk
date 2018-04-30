import React, { Component } from 'react';
import EarthQuake from './EarthQuake';
import Header from '../Components/Header' 
import Footer from "../Components/Footer";

class App extends Component {
  render() {
    return (
     <div>
        <Header />
        <EarthQuake/>
        <Footer />       
     </div>
    );
  }
}



export default (App);
