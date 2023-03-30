import React, {Component} from 'react';
import { IoArrowForwardOutline } from "react-icons/io5";

class ChallengesList extends Component {
    
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.card}>
                    <h3 style={{fontSize:  20, marginRight: 30, fontWeight: 400, color: '#fff'}}>{this.props.name}</h3>
                    <IoArrowForwardOutline size={20} color={'#fff'}/>
                </div>
            </div>
            );
    }
}

const styles = {
    container: {
        backgroundColor: '#3d5875',
        paddingLeft: 25,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        borderRadius: 10
      },
      card: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }
};

export default ChallengesList;