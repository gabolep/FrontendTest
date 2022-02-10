import { Component } from 'react';


import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import Select from './components/Select';
import News from './components/News';
import Pages from './components/Pages';

    //setting localstorage
    let type = localStorage.getItem('type');
    if(!type){
        type = localStorage.setItem('type','all');
    }
    let angular = localStorage.getItem('angular');
    let react = localStorage.getItem('react');
    let vuejs = localStorage.getItem('vuejs');
    if(!angular){
        angular = localStorage.setItem('angular','false');
    }
    if(!react){
        react = localStorage.setItem('react','false');
    }
    if(!vuejs){
        vuejs = localStorage.setItem('vuejs','false');
    }
    let page = localStorage.getItem('page');
    if(!page){
        page = localStorage.setItem('page','0');
    }
    let favNews = localStorage.getItem('favNews');
    if(!favNews){
        favNews = localStorage.setItem('favNews','');
    }


class App extends Component {
  
  render(){
    return (
      <div className="App">
          <Header/>
          <Buttons/>
          <Select/>
          <News/>
          <Pages></Pages>
      </div>
    );
  }
  
}

export default App;
