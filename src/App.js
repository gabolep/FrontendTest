import { Component } from 'react';


import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import Buttons from './components/Buttons';
import Select from './components/Select';





//FIXME: ERASE APP 

class App extends Component {
  render(){
    return (
      <div className="App">
        
          <Header/>
          <Buttons/>
          <Layout>
            <Select></Select>
          </Layout>
      </div>
    );
  }
  
}

export default App;
