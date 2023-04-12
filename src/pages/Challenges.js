import React, { useState, useEffect } from "react";
import ChallengesList from '../components/ChallengesList';
import GoalDetailCard from '../components/GoalDetailCard';
import '../styles.css';
import ChallengeDetail from './ChallengeDetail';
import app from '../firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs } from "firebase/firestore";
import { Link, Route, Switch } from "react-router-dom";
import firebase from 'firebase/compat/app';

const Challenges = props =>  {
    const [hasChallenge, setHasChallenge] = useState('');
    const [challenges, setChallenges] = useState([]);
    const [currentChallenge, setCurrentChallenge] = useState("");

    const user = firebase.auth().currentUser;
    const userId = user.uid;
    var userEmail = user.email;
    let userName = userEmail.match(/^([^@]*)@/)[1];

    const fetchChallenges = async () => {
       
        await getDocs(collection(db, "challenges"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setChallenges(newData);                
                console.log(challenges, newData);
            })
       
    }
    useEffect(() => {
        fetchChallenges();

      }, []);

      useEffect(() => {
        const fetchPost = async () => {
          
          const q = query(collection(db, "users"), where("id", "==", userId));
    
          const querySnapshot = await getDocs(q);
    
          const userData = querySnapshot.docs[0]?.data(); //getting the only user data
    
          if (userData.hasOwnProperty("challenges") && userData.challenges !== "") {
            const hasChallenge = userData.challenges;
            console.log("inside if statement");
            setCurrentChallenge(hasChallenge);//if goal exists and not empty set current goal
          } else {
            setCurrentChallenge(hasChallenge); //if goal not exists or empty set current goal as ""
          }
        };
    
        fetchPost();
      }, []);

    return (
        <div className="cont">
        <div style={styles.headerContainer}>
            <h1 className='headerText'>Challenges</h1>
            <p></p>
            {
                currentChallenge && currentChallenge.length > 0 ? <div>
                <h3>Your current challenge(s):</h3>
                <div style={styles.listContainer}>
        <div style={styles.list}>
                    <div key={currentChallenge.id}>
                      <Link 
                      to={{
                        pathname: `/challengedetail/${currentChallenge}`,
                        state: { challenges: currentChallenge } 
                      }}

                      params={{id: currentChallenge.id, name: currentChallenge.name, description: currentChallenge.description}}
                      >
                      <ChallengesList name={currentChallenge}/>
                      </Link>
                    </div>
                    </div>
                    </div>
            </div>
                :
                <div><h3>You have not joined any challenge yet.</h3><p style={styles.paragraph}>Browse the available challenges and join one today!</p> 
                <h1 style={styles.header}>Available challenges</h1>
                <div style={styles.listContainer}>
                 <div style={styles.list}>
                 {challenges.map(item => (
                   <div key={item.id}>
                     <Link 
                     to={{
                       pathname: `/challengedetail/${item.id}`,
                       state: { challenges: item } 
                     }}
         
                     params={{id: item.id, name: item.name, description: item.description}}
                     >
                     <ChallengesList name={item.name}/>
                     </Link>
                   </div>
                 ))}
                 </div>
                </div> </div>
            }
        </div>
       
 
    </div>
    );
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 25,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 100,
      flexDirection: 'row',
    
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ED904C',
        textAlign: 'center'
    },
    paragraph: {
        marginTop: 10,
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 400
    },
    headerContainer: {
        textAlign: 'center',
        paddingBottom: 20
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

  export default Challenges;