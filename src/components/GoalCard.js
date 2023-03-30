import React, {Component} from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";

class AvailableGoalCard extends Component {
    
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.card}>
                        <h3 style={{fontSize:  20, marginRight: 30}}>{this.props.name}</h3>
                        <IoArrowForwardOutline size={20} color={'#fff'}/>
                </div>
            </div>
            );
    }
}

const styles = {
    container: {
        backgroundColor: 'tomato',
        paddingLeft: 25,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        borderRadius: 10
      },
      card: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      }
};

export default AvailableGoalCard;