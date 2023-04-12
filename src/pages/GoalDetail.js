import React, { useState, useEffect } from "react";
import GoalDetailCard from '../components/GoalDetailCard';
import { useParams } from "react-router-dom";
import app from '../firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot, Timestamp } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs, addDoc, setDoc, updateDoc } from "firebase/firestore";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import firebase from 'firebase/compat/app';

const GoalDetail = (_) => {
    let { id, name } = useParams();
    const [goal, setGoal] = useState("");
    const { state } = useLocation();
    const user = firebase.auth().currentUser;
    const userId = user.uid;
    var userEmail = user.email;
    let userName = userEmail.match(/^([^@]*)@/)[1];

    function handleUpdate(e){
        e.preventDefault();
        const ref = doc(db, "users", userId);
        updateDoc(ref, {
            goal: state.goals.name
        }).then(reponse => {
            alert("updated");
        }).catch(error => {
            console.log(error.message);
        })
    }
       
    return (
        <div style={styles.container}>
        {console.log(state.goals.name)}
            <GoalDetailCard  name={state.goals.name} description={state.goals.description} duration={state.goals.duration} />
            
        <button style={styles.buttonContainer} onChange={e => setGoal(e.target.value)} onClick={handleUpdate}> 
            <h1 style={styles.buttonText}>Join challenge!</h1>
        </button>
        </div>
    );
}

const styles = {
    container: {
      display: 'flex',
      flex: 2,
      backgroundColor: '#fff',
      paddingLeft: 25,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 200,
      flexDirection: 'row'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ED904C',
    },
    paragraph: {
        marginTop: 10,
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 400
    },
    headerContainer: {

    },
    listContainer: {
        display: 'block',
        width: 200,
        alignItems: 'center',
        margin: '0 auto'
    },
    list: {
    }
  };

  export default GoalDetail;