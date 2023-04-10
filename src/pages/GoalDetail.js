import React, { useState, useEffect } from "react";
import GoalDetailCard from '../components/GoalDetailCard';
import { useParams } from "react-router-dom";
import app from '../firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot, Timestamp } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs, addDoc, setDoc } from "firebase/firestore";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import firebase from 'firebase/compat/app';

const GoalDetail = (_) => {
    let { id } = useParams();
    const [goal, setGoal] = useState(null);
    const { state } = useLocation();

   async function handleClick() {
        var user = firebase.auth().currentUser;
      const userId = user.uid;
      var userEmail = user.email;
      let userName = userEmail.match(/^([^@]*)@/)[1];
      const newData = {
        user,
        goal,
        createdAt: Timestamp
      }
      try {
        const ref = query(collection(db, "users"), where("id", "==", userId));
        await setDoc(ref, newData);
      }
      catch(error){
        console.error(error);
      }}
       
    return (
        <div style={styles.container}>
        {console.log(state.goals.name)}
            <GoalDetailCard  name={state.goals.name} description={state.goals.description} duration={state.goals.duration} />
            
        <button style={styles.buttonContainer} onChange={(event) => {
                        setGoal(event.target.goal);
                    }} onClick={handleClick}> 
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