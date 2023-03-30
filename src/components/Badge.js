import React, { Component } from 'react';
import '../styles.css';
import { IoBalloon } from 'react-icons/io5';
class Badge extends Component {
    
    render() {
        return (
            <div style={{display:'flex',  height: 100,  borderRadius: 10, flexDirection:'row', marginTop: 14, alignItems: 'flex-start', justifyContent: 'center',  borderWidth: 1, borderColor: '#D9D9D9',}}>
                <div>
                    <IoBalloon size={40} color='danger'
                    />
                </div>
                <div style={{ marginLeft: 30, paddingRight: 10}}>
                    <h1 className='headerText'>{this.props.name}</h1>
                    <p style={styles.paragraph} numberOfLines={4}>{this.props.description}</p>
                </div>
            </div>
        );
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingLeft: 25,
        paddingRight: 15
      },
      headerh1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#5D966D',
        marginTop: 22,
        h1Transform: 'uppercase',
        padding: 10,
        paddingBottom: 0
    },
    paragraph: {
        fontSize: 16,
        padding: 10,
        paddingTop: 4
    },shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
};

export default Badge;