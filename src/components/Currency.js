import React, {Component} from 'react';
import { IoFlashOutline } from 'react-icons/io5';

class Currency extends Component {
    
    render() {
        return (
            <div style={{display:'flex', alignContent: 'flex-start', height: 54, position: 'absolute', right: 0, top: 0}}>
                <div style={styles.currency}>
                    <h3 style={{color: '#3D6160', fontWeight: 'bold', fontSize: 15, marginRight: 6}}>{this.props.currencyData}</h3>
                   <IoFlashOutline size={20} color='beige'/>
                 </div>
            </div>
    );}
}

const styles = {
    currency: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#BCD980',
        borderRadius: 10,
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        width: 100
    },
};

export default Currency;