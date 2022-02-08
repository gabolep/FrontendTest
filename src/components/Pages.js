import { Component } from 'react';
import Page from './Page';
import './styles/Pages.css'

class Pages extends Component{
    state = {
        pages: [
            {page: '<'},
            {page: '1'},
            {page: '2'},
            {page: '3'},
            {page: '4'},
            {page: '5'},
            {page: '6'},
            {page: '7'},
            {page: '8'},
            {page: '9'},
            {page: '>'},
        ],
    }
   
    render() {
        let type = localStorage.getItem('type');
        if(type === 'all'){
            return(
                <div className='grid'>
                    {   this.state.pages.map(p =>
                            <Page key={p.page} 
                            p = {p} 
                            /> 
                    )}   
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
}

export default Pages;
