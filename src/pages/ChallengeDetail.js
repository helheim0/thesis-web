import React, { useState, useEffect } from "react";
import ChallengesList from '../components/ChallengesList';
import GoalDetailCard from '../components/GoalDetailCard';
import { useParams } from "react-router-dom";
import app from '../firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot, Timestamp } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs, addDoc } from "firebase/firestore";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import firebase from 'firebase/compat/app';

const ChallengeDetail = async (event) => {
    let { id } = useParams();
    const [challenges, setChallenges] = useState(null);
    const { state } = useLocation();
    const user = firebase.auth().currentUser;
    const userId = user.uid;
    var userEmail = user.email;
    let userName = userEmail.match(/^([^@]*)@/)[1];
    event.preventDefault();

    await addDoc(collection(db, "users"),where("id", "==", userId), {
        challenges: challenges,
        createdAt: Timestamp
    });

    return (
        <div style={styles.container}>
            <GoalDetailCard  name={state.challenges.name} description={state.challenges.description} duration={state.challenges.duration} reward={state.challenges.reward}/>
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

  export default ChallengeDetail;