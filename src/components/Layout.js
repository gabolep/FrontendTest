import { Component } from 'react';
import './styles/Layout.css'


const styles = {
    layout: {
        backgroundColor: '#fcfcfc',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        float: 'left',
    },
    container: {
        width: '1200px',
    }
}



class Layout extends Component {
    render() {
        return(
            <div style = {styles.layout}>
                <div style = {styles.container}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;