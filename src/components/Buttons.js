import { Component } from 'react';
import './styles/Buttons.css'


class Buttons extends Component{
    componentDidMount(){
        let type = localStorage.getItem('type');
        if(!type){
            type = localStorage.setItem('type','all');
        }
    }
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
    changeType = () =>{
        const box = document.querySelector('.boxUnselected');
        console.log(box.textContent);
        if(box.textContent === 'My faves'){
            console.log('entre');
            localStorage.setItem('type','favs')
        }else{
            localStorage.setItem('type','all')
        }
        window.location.reload(true);
    }
    render(){
        let type = localStorage.getItem('type');
        if(type === 'all'){
            return(
                <div className='father'>
                     <div className='boxSelected'>
                        All
                    </div>
                    <div className='boxUnselected' onClick = {() => this.changeType()} >
                       My faves    
                    </div>
                </div>
            )
        }else if(type === 'favs'){
            return(
                <div className='father'>
                     <div className='boxUnselected' onClick = {() => this.changeType()}>
                        All
                    </div>
                    <div className='boxSelected'>
                       My faves    
                    </div>
                </div>
            )
            
        }
        
    }
        

}

export default Buttons;