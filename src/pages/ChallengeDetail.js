import React, { useState, useEffect } from "react";
import ChallengesList from '../components/ChallengesList';
import GoalDetailCard from '../components/GoalDetailCard';
import { useParams } from "react-router-dom";
import app from '../firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot, Timestamp, updateDoc } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs, addDoc, setDoc } from "firebase/firestore";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import firebase from 'firebase/compat/app';
import ChallengeDetailCard from "../components/ChallengeDetailCard";

const ChallengeDetail = (event) => {
    let { id } = useParams();
    const [challenges, setChallenges] = useState("");
    const { state } = useLocation();
    const user = firebase.auth().currentUser;
    const userId = user.uid;
    var userEmail = user.email;
    let userName = userEmail.match(/^([^@]*)@/)[1];

    useEffect(() => {
        const fetchPost = async () => {
          
          const q = query(collection(db, "users"), where("id", "==", userId));
    
          const querySnapshot = await getDocs(q);
    
          const userData = querySnapshot.docs[0]?.data(); //getting the only user data
    
          if (userData.hasOwnProperty("challenges") && userData.challenges !== "") {
            const hasChallenge = userData.challenges;
            console.log("inside if statement");
            setChallenges(hasChallenge);//if goal exists and not empty set current goal
          } else {
            setChallenges(""); //if goal not exists or empty set current goal as ""
          }
        };
    
        fetchPost();
      }, []);

      
    function handleUpdate(e){
        e.preventDefault();
        const ref = doc(db, "users", userId);
        const challengeRef = doc(db, "userChallenges", userId);
        updateDoc(ref, {
            challenges: state.challenges.name
        }).then(reponse => {
            alert("updated");
        }).catch(error => {
            console.log(error.message);
        })

        setDoc(challengeRef, {
            id: userId,
            name: state.challenges.name,
            duration: state.challenges.duration,
            reward: state.challenges.reward
        }).then(reponse => {
            alert("updated");
        }).catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div style={styles.container}>
            <ChallengeDetailCard  name={state.challenges.name} description={state.challenges.description} duration={state.challenges.duration} reward={state.challenges.reward}/>
        {
             challenges && challenges.length > 0 ? null : <button style={styles.buttonContainer} onClick={handleUpdate}> 
             <h1 style={styles.buttonText}>Join challenge!</h1>
         </button>
        }
        
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