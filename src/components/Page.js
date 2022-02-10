import { Component } from 'react';
import './styles/Page.css'


class Page extends Component{

    changePage = (e,p) =>{
        const pageText = e.target.textContent;
        let page = localStorage.getItem('page');
        if(pageText === '<'){
            parseInt(page);
            page--;
            page.toString();
            const realPage = localStorage.getItem('page');
            if(realPage === '0'){
                return;
            }else{
                localStorage.setItem('page', page); 
            }
        }else if(pageText === '>'){
            parseInt(page);
            page++;
            page.toString();
            localStorage.setItem('page', page);  
        }else{
            let pageInt = parseInt(pageText);
            pageInt--;
            pageInt.toString();
            localStorage.setItem('page', pageInt);
        }
        window.location.reload(true);

    }
    render(){
        const  {p}  = this.props
        let page = localStorage.getItem('page');
        let pageInt = parseInt(page);
        pageInt = pageInt + 1;
        const pageplus = pageInt;
        const pageText = pageInt.toString();
        const textBox = p.page
        parseInt(textBox);
        if(p.page === pageText){
            return(
                <div className='cardSelected'> 
                {pageText}
                </div> 
            )
        }else if(pageplus > 9 && p.page == 9){
            return(
                <div className='cardSelected'> 
                {pageText}
                </div> 
            )
        }
        else{
            return(
                <div className='card' onClick={(e,p) => this.changePage(e,p)}> 
                    {p.page}
                </div> 
            )
        }
        
    }

}
export default Page;
