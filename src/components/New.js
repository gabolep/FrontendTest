import { Component } from 'react';
import './styles/New.css'

class New extends Component{

    addToFavs = (e,n) =>{
        const imagen = e.target;
        const host = window.location.host
        const url = 'http://' + host;
        const urlnoFav = url + '/noFav.png';
        const urlFav = url + '/Fav.png';
        const newsItem = {
            url: n.url,
            story_url: n.story_url,
            title: n.title,
            story_title: n.story_title,
            created_at: n.created_at,
            author: n.author,
            objectID: n.objectID
        };
        if(imagen.src === urlnoFav){
            const favNewsArray = [newsItem];
            let favNews = localStorage.getItem('favNews');
            if(favNews === ''){
                localStorage.setItem('favNews',JSON.stringify( favNewsArray ));
            }else{
                const jsonNews = JSON.parse(favNews);
                jsonNews.push(newsItem);
                
                localStorage.setItem('favNews',JSON.stringify( jsonNews ));
            }
        }else  if(imagen.src === urlFav){
            let favNews = localStorage.getItem('favNews');
            if(favNews === ''){
            }else{
                const jsonNews = JSON.parse(favNews);
                const findNew = jsonNews.filter(e => e.objectID !== n.objectID);
                localStorage.setItem('favNews',JSON.stringify( findNew ));
            }
        }
        if(imagen.src === urlnoFav){
            imagen.src = urlFav
        }else{
            imagen.src = urlnoFav
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
        let now = new Date();
        const dateServer = new Date(n.created_at);
        let diff = Math.abs(now - dateServer) / 36e5;
        let dateString;
        const author = n.author;
        if(diff < 1){
            dateString = 'now by ' + author;     
        }else if(diff < 24){
            const floorDiff =  Math.floor(diff);
            const diffString = floorDiff.toString()
            dateString = diffString + ' hours ago by ' + author;      
        }
        else if(diff > 24 && diff<48){
            dateString = 'yesterday by '  + author;
        }else{
            diff = Math.abs(now - dateServer) / (1000*3600*24);
            const floorDiff =  Math.floor(diff);
            const diffStringInDays = floorDiff.toString()
            dateString = diffStringInDays + ' days ago by ' + author;
        }

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
            const findNew = jsonNews.filter(e => e.objectID === n.objectID);
            if(findNew.length === 1){
                src = './Fav.png';
            }else{
                src = './noFav.png';
            }
        }
        if(!URL || !title){
            const bool = false;
            return(
                bool
            )
        }else{
            return(
                <div className='box'>
                
                    <div className='time' onClick={() => this.openNew(n)}> 
                        <img className='imgTime' alt='hearth' src='./time.png'></img>
                        <span className="spanTime">
                            {dateString}
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