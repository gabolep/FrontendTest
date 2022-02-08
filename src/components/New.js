import { Component } from 'react';
import './styles/New.css'

class New extends Component{

    addToFavs = (e,n) =>{
        //changing css
        const imagen = e.target;
        
        //creating the new
        let URL = n.url;
        if(URL == null){
            URL = n.story_url;
        }
        let title;
        if(n.title !== null){
            title = n.title;
        }else{
            title = n.story_title;
        }
        const newsItem = {
            url: n.url,
            story_url: n.story_url,
            title: n.title,
            story_title: n.story_title,
            created_at: n.created_at,
            author: n.author,
            objectID: n.objectID
        };
        if(imagen.src === 'http://localhost:3000/noFav.png'){
            const favNewsArray = [newsItem];
            let favNews = localStorage.getItem('favNews');
            if(favNews === ''){
                localStorage.setItem('favNews',JSON.stringify( favNewsArray ));
            }else{
                const jsonNews = JSON.parse(favNews);
                jsonNews.push(newsItem);
                localStorage.setItem('favNews',JSON.stringify( jsonNews ));
            }
        }
        if(imagen.src === 'http://localhost:3000/noFav.png'){
            imagen.src = 'http://localhost:3000/Fav.png'
        }else{
            imagen.src = 'http://localhost:3000/noFav.png'
        }
    }
    openNew = (n) =>{
        let URL = n.url;
        if(URL == null){
            URL = n.story_url;
        }
        window.open(URL, '_blank');
    }
    render(){
        const  {n}  = this.props
        let title;
        if(n.title !== null){
            title = n.title;
        }else{
            title = n.story_title;
        }
        let URL = n.url;
        if(URL == null){
            URL = n.story_url;
        }
        let src;
        let favNews = localStorage.getItem('favNews');
        if(favNews === ''){
            src = './noFav.png';
        }else{
            const jsonNews = JSON.parse(favNews);
            let id = n.objectID;
            const findNew = jsonNews.filter(e => e.objectID === n.objectID);
            if(findNew.length === 1){
                src = './Fav.png';
            }else{
                src = './noFav.png';
            }
        }
        if(!URL || !title){
            return(
                null
            )
        }else{
            return(
                <div className='box'>
                
                    <div className='time' onClick={() => this.openNew(n)}> 
                        <img className='imgTime' alt='hearth' src='./time.png'></img>
                        <span className="spanTime">
                            3 hours ago by {n.author}
                        </span>
                    </div>
                    <div className='title' onClick={() => this.openNew(n)}>
                        <span className="spanTitle">
                            {title}
                        </span>    
                    </div>
                    <div className='hearthBox'> 
                    <img className='imgFav' alt='hearth' src={src}  onClick={(e) => this.addToFavs(e,n)}></img>
                    </div>
                </div>
        )
        }
        
    }
}

export default New;