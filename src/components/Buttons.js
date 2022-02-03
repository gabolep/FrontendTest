import { Component } from 'react';
import './styles/Buttons.css'


class Buttons extends Component{
    viewAll = () =>{
        //changing css
        const MyFaves = document.querySelector('.MyFaves');
        const boxMyFaves = document.querySelector('.boxMyFaves');
        boxMyFaves.style.borderColor = '#d6d6d6';
        MyFaves.style.color = '#606060';
        const All = document.querySelector('.All');
        const boxAll = document.querySelector('.boxAll');
        boxAll.style.borderColor = '#1797ff';
        All.style.color = '#1797ff';
    }

    viewFaves = () =>{
        //changing css
        const MyFaves = document.querySelector('.MyFaves');
        const boxMyFaves = document.querySelector('.boxMyFaves');
        boxMyFaves.style.borderColor = '#1797ff';
        MyFaves.style.color = '#1797ff';
        const All = document.querySelector('.All');
        const boxAll = document.querySelector('.boxAll');
        boxAll.style.borderColor = '#d6d6d6';
        All.style.color = '#606060';
    }

    render(){
        return(
            <div className='father'>
                 <div className='boxAll' onClick={() => this.viewAll()}>
                    <span className="All">
                        All
                    </span>
                </div>
                <div className='boxMyFaves' onClick = {() => this.viewFaves()} >
                    <span className="MyFaves">
                       My faves
                    </span>
                </div>
            </div>
           
        )
    }
        

}

export default Buttons;