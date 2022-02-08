import { Component } from 'react';


import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Buttons from './components/Buttons';
import Select from './components/Select';
import New from './components/New';
import News from './components/News';
import Pages from './components/Pages';







//FIXME: ERASE APP 

class App extends Component {
  componentDidMount(){
    let page = localStorage.getItem('page');
    if(!page){
        page = localStorage.setItem('page','0');
    }
    let favNews = localStorage.getItem('favNews');
    if(!favNews){
        favNews = localStorage.setItem('favNews','');
    }
}
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
