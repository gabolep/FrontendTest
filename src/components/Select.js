import { Component } from 'react';
import './styles/Select.css'


class Select extends Component{

    render(){
        return(
            <div>
                <select className='Select'>
                    <option className='Option' value="volvo">
                        <img className='Img' alt='asd' src='./title/hacker-news.png' />
                        Angular</option>
                    <option className='Option' value="saab">Reacts</option>
                    <option className='Option' value="opel">Vuejs</option>
                </select>
            </div>
        )
    }
        

}

export default Select;