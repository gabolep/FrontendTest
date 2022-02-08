import { Component } from 'react';
import New from './New';
import axios from 'axios';
import './styles/News.css'


class News extends Component{
    state = { 
        reactNews: [],
        angularNews: [],
        vuejsNews: [],
    }
    async componentDidMount(){
        //creating the boleans in local storage, if the booleans doesn´t exists it will created
        let angular = localStorage.getItem('angular');
        let react = localStorage.getItem('react');
        let vuejs = localStorage.getItem('vuejs');
        if(!angular){
            angular = localStorage.setItem('angular','false');
        }
        if(!react){
            react = localStorage.setItem('react','false');
        }
        if(!vuejs){
            vuejs = localStorage.setItem('vuejs','false');
        }

        const pageText = localStorage.getItem('page');

        const urlReact = 'https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=';
        const urlReactAndPage = urlReact + pageText;
        const responseReact = await axios.get(urlReactAndPage);
        this.setState({ reactNews: responseReact.data.hits});

        const urlAngular = 'https://hn.algolia.com/api/v1/search_by_date?query=angular&page=';
        const urlAngularAndPage = urlAngular + pageText;
        const responseAngular = await axios.get(urlAngularAndPage);
        this.setState({ angularNews: responseAngular.data.hits});

        const urlVuejs = 'https://hn.algolia.com/api/v1/search_by_date?query=vuejs&page=0';
        const urlVuejsAndPage = urlVuejs + pageText;
        const responseVuejs = await axios.get(urlVuejsAndPage);
        this.setState({ vuejsNews: responseVuejs.data.hits});

        
        


    }
    render(){
        let activeNews;
        let type = localStorage.getItem('type');
        if(type === 'all'){
            let angular = localStorage.getItem('angular');
            let react = localStorage.getItem('react');
            let vuejs = localStorage.getItem('vuejs');
            if(angular ==='true'){
                activeNews = this.state.angularNews;
            }else if(react === 'true'){
                activeNews = this.state.reactNews;
            }else if(vuejs === 'true'){
                activeNews = this.state.vuejsNews;
            }
            if(angular === 'false' && react === 'false' && vuejs === 'false' ){
                return(
                    <div></div>
                )
            }else{
                return(
                    <div className='gridLayout'>
                        {   activeNews.map(n =>
                            <New key = {n.objectID}
                                n = {n}
                            />
                        )}
                    </div>
                )
            }
        }else{
            let favNews = localStorage.getItem('favNews');
            if(favNews === '' || favNews === '[]'){
                return(
                    <div className='message'>you don't have favorite news yet</div>
                )
            }else{
                const jsonNews = JSON.parse(favNews);
                activeNews = jsonNews;
                return(
                    <div className='gridLayout'>
                        {   activeNews.map(n =>
                            <New key = {n.objectID}
                                n = {n}
                            />
                        )}
                     </div>
                )

            }

        }
    }
}
export default News;
