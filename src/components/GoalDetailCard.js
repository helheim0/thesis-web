import React, { Component } from 'react'
import app from '../firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot, Timestamp } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs, addDoc } from "firebase/firestore";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import firebase from 'firebase/compat/app';

class GoalDetailCard extends React.Component {
    

      
    render() {
      return (
        <div>
        <h1 style={styles.headerText}>{this.props.name}</h1>
       {/* <h4 style={{fontStyle: 'italic'}}>x number of people have joined</h4> */}
        <p style={styles.paragraph}>{this.props.description}</p>
        <h1 style={styles.headerText}>Duration</h1>
        <p style={styles.paragraph}>{this.props.duration}</p>
        <h1 style={styles.headerText}>Reward</h1>
        <div style={{flexDirection: 'row'}}>
            <p style={styles.paragraph}>{this.props.reward}</p>
        </div>
    </div>
     );
    }
  }

  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      paddingTop: 5
    },
    headerText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#ED904C',
        marginTop: 22
    },
    paragraph: {
        marginTop: 10,
        fontSize: 18,
    },
    buttonContainer: {
        elevation: 8,
        backgroundColor: "#3d5875",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 22,
        marginTop: 40,
        width: 200,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
};

export default GoalDetailCard;