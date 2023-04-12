import Badge from '../components/Badge';
import Currency from '../components/Currency';
import '../styles.css';
import { IoPersonSharp } from 'react-icons/io5';
import app from '../firebaseConfig';
import GoalList from "./GoalList";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs, getFirestore, documentId  } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import React, { useState, useEffect } from "react";
import { firestore } from 'firebase/app';
import { useStreak } from 'use-streak';
export default function Profile() {
    //let user = firebase.auth().currentUser;
    //var userEmail = user.email;
    //let userName = userEmail.match(/^([^@]*)@/)[1];
    //let userId = user.id;
    const [currentGoal, setCurrentGoal] = useState("");
   const today = new Date();
   const {currentCount} = useStreak(localStorage, today);

    const user = firebase.auth().currentUser;
    const userId = user.uid;
    var userEmail = user.email;
    let userName = userEmail.match(/^([^@]*)@/)[1];
    
    useEffect(() => {
        const fetchPost = async () => {
          
          const q = query(collection(db, "users"), where("id", "==", userId));
    
          const querySnapshot = await getDocs(q);
    
          const userData = querySnapshot.docs[0]?.data(); //getting the only user data
    
          if (userData.hasOwnProperty("goal") && userData.goal !== "") {
            const goal = userData.goal;
            setCurrentGoal(goal); //if goal exists and not empty set current goal
          } else {
            setCurrentGoal(""); //if goal not exists or empty set current goal as ""
          }
        };
    
        fetchPost();
      }, []);

    const [badges, setBadges] = useState([]);

    const loadBadges = async () => {
       
        await getDocs(collection(db, "badges"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setBadges(newData);                
                console.log(badges, newData);
            })
       
    }
    useEffect(() => {
      loadBadges();

      }, []);
    return (
        <div className='cont'>
            <div style={{display: 'flex', flexDirection:'row', borderBottomWidth: 1, borderColor: '#D9D9D9', backgroundColor: '#D9D9D9', borderRadius: 10, justifyContent: 'center', alignItems:'center'}}>
                <div style={{ height: 50, marginTop: 20}}>
                  <IoPersonSharp size={50}/>
                </div>
                <div style={{marginLeft: 40}}>
                 <h1 className='headerText'>{userName}</h1>
                    <p style={styles.paragraph}>{userName}'s bio that can be edited later on.</p>
     </div>
                <Currency />
            </div>
            
            <div>
                <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                    <h1 className='headerText'>Progress</h1>
                    <h1 className='headerText'>{currentCount} day streak</h1>
                </div>
                <div style={{height: 20, backgroundColor:'#333'}}></div>
            </div>
            

            <div>
                <h1 className='headerText'>Current goal</h1>
                {
                       currentGoal && currentGoal.length > 0 ?  <h2>
                      {currentGoal}
                      </h2>
                      :
                      <h2>No goal yet</h2>
                    
                    }
                
            </div>

            <div>
                <h1 className='headerText'>See the stats</h1>
                <p style={styles.paragraph}>Coming soon!</p>
            </div>

            <div>
                <h1 className='headerText'>Badges</h1>
                {
        badges?.map((badge,i)=>(
          <Badge name={badge.name} description={badge.description} key={i}/>
        ))
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
        paddingRight: 15
      },
      headerh1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ED904C',
        marginTop: 22
    },
    paragraph: {
        marginTop: 10,
        fontSize: 16,
    },
}