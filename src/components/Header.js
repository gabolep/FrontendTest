import { Component } from 'react';
import './styles/Header.css'

class Header extends Component{
    render(){
        return(
            <header className='Header'>
                <div className='ContainerImg'>
                    <img className='HACKER-NEWS' src='./title/hacker-news.png' ></img>
                </div>
            </header>
        )
        
    }
}

export default Header;