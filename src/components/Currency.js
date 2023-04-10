import React, {Component, useState, useEffect} from 'react';
import { IoFlashOutline } from 'react-icons/io5';
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs } from "firebase/firestore";
import { Link, Route, Switch } from "react-router-dom";
import firebase from 'firebase/compat/app';

class Currency extends Component {
    state = {
        currency: []
    }

    fetchCurrency = () => {
        const user = firebase.auth().currentUser;
        const userId = user.uid;
        const q = query(collection(db, "users"), where("id", "==", userId)); 
        const querySnapshot =  getDocs(q);

        const unsub = onSnapshot(q, (snap) => {
        
        console.log(" data: ", snap.docs.map(d => d.data()));
        const curr = snap.docs.map(d => d.data().currency);
        this.setState({
            ...this.state,
            currency: curr
          })
        });
         
    }
    componentDidMount(){
        this.fetchCurrency();
      }
    render() {
        return (
            <div style={{display:'flex', alignContent: 'flex-start', height: 54, position: 'absolute', right: 0, top: 0}}>
                <div style={styles.currency}>
                    <h3 style={{color: '#3D6160', fontWeight: 'bold', fontSize: 15, marginRight: 6}}>{this.state.currency}</h3>
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