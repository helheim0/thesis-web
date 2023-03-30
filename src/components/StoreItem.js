import React, { Component } from 'react';
import { IoLockClosedOutline } from "react-icons/io5";

class StoreItem extends Component {
    
    render() {
        return (
            <div style={{ width: 200, marginLeft: 20, borderColor: '#EFEFEF', borderWidth: 1, padding: 8, borderRadius: 10, backgroundColor: '#F5F5F5'}}>
                <div style={{flex: 2}}>
                    {
                        this.props.isLocked ? 
                        <IoLockClosedOutline size={60}/>
                       :  <img
                            style={{flex:1, width:null, height:null, resizeMode: 'cover'}}
                            source={this.props.imageUri} alt="d"
                          /> 
                    }
                    
                </div>
                <div style={{flex: 1, padding: 10, flexDirection: 'column'}}>
                    <h1 style={{fontSize: 20}}>{this.props.name}</h1>
                    {
                        this.props.isLocked ? 
                        <h1 style={{fontSize: 20}}>{this.props.price}</h1> : null
                    }
                </div>
            </div>
        );
    }
}

export default StoreItem;