import { Component } from 'react';
import './styles/Select.css'


class Select extends Component{
    state = {
        react: localStorage.getItem('react'),
        angular: localStorage.getItem('angular'),
        vuejs: localStorage.getItem('vuejs'),
    }
    
    viewList = () => { 
        const Option = document.querySelector('.OptionBox');

        if(Option.style.visibility === 'hidden'){
            Option.style.visibility = 'visible';
        }else{
            Option.style.visibility = 'hidden';
        }
    }
    changeText = async (e) => {
        let text = e.target.textContent;
        console.log(e.target.textContent);
        console.log(text);
        const delay = ms => new Promise(res => setTimeout(res, ms));
        const Select = document.querySelector('.textSelect');
        Select.textContent = text;
        
        if(text === 'React' || text === ' React'){
            console.log('entre en if react');
            localStorage.setItem('react','true');
            localStorage.setItem('angular','false');
            localStorage.setItem('vuejs','false');
        }else if(text === 'Angular' || text === ' Angular'){
            localStorage.setItem('react','false');
            localStorage.setItem('angular','true');
            localStorage.setItem('vuejs','false');
        }else if(text === 'Vuejs' || text === ' Vuejs' ){
            localStorage.setItem('react','false');
            localStorage.setItem('angular','false');
            localStorage.setItem('vuejs','true');
        }
        await delay(2000);
        window.location.reload(true);

    }
    render(){
        let selectText;
        if(this.state.angular === 'true'){
            selectText = 'Angular'
        }else if(this.state.react === 'true'){
            selectText = 'React'
        }else if(this.state.vuejs === 'true'){
            selectText = 'Vuejs'
        }else{
            selectText = 'Select your news'
        }
        let type = localStorage.getItem('type');
        if(type === 'all'){
            return(
                <div className='Container'>
                    
                        <div className='SelectBox' onClick={ () => this.viewList()}>
                                <div className='contenidoSelect' >
                                    <span className='textSelect'>{selectText}</span>
                                </div>
                                <div className='OptionBox'>
                                    <dl>
                                        <dt className='Option' onClick={ (e) => this.changeText(e)} > <img className='Img' alt='hearth' src='./Angular.png'></img><span className='optionSpan'>Angular</span></dt>
                                        <dt className='Option' onClick={ (e) => this.changeText(e)} > <img className='Img' alt='hearth' src='./react.png'></img><span className='optionSpan'>React</span></dt>
                                        <dt className='Option' onClick={ (e) => this.changeText(e)} > <img className='Img' alt='hearth' src='./vuejs.png'></img><span className='optionSpan'>Vuejs</span></dt>
                                    </dl>
                                </div>
                        </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
        
    }
}

export default Select;