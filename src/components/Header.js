import { Component } from 'react';
import './styles/Header.css'

class Header extends Component{
    render(){
        return(
            <header className='Header'>
                <img className='HACKER-NEWS' src='./title/hacker-news.png' ></img>
            </header>
        )
        
    }
}

export default Header;