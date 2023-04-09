import React, { useState, useEffect } from "react";
import Currency from "../components/Currency";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "../styles.css";
import {   BrowserRouter, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Track from "./Track";
import app from '../firebaseConfig';
import GoalList from "./GoalList";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs, getFirestore  } from "firebase/firestore";
import firebase from 'firebase/compat/app';

export default function Home() { 
    const hasTracked = false;
    const date = new Date();
    const today = ". " +  date.getDate()  ;
    const month = date.getMonth() + 1;
    const  [hasGoal, setHasGoal] = useState(false);
    const [goal, setGoal] = useState("");
    let user = firebase.auth().currentUser;
    var userEmail = user.email;
    let userName = userEmail.match(/^([^@]*)@/)[1];
    let userId = user.id;

    useEffect(() => {
        const fetchPost = async () => {
          
          const q = query(collection(db, "users"), where("id", "==", userId));
    
          const querySnapshot = await getDocs(q);
    
          const userData = querySnapshot.docs[0]?.data(); //getting the only user data
    
          if (userData.hasOwnProperty("goal") && userData.goal !== "") {
            const goal = userData.goal;
            setGoal(goal); //if goal exists and not empty set current goal
          } else {
            setGoal(""); //if goal not exists or empty set current goal as ""
          }
        };
    
        fetchPost();
      }, []);


    return (
        <div >
            <button onClick={() => app.auth().signOut()}>Sign out</button>
            <h1> hello {userName}</h1>
            {
                 goal.length > 0 ?  (<div><div style={container}>
                <Currency />
            </div>
            <div style={{padding: '4rem', display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-evenly'}}>
                <h1 className="headerText">Current goal: {goal}</h1>
                <div style={{ width: 200, height: 200, margin: '0 auto' }}>
                    {
                        hasTracked ?
                     <CircularProgressbarWithChildren
                        valueStart={0}
                        valueEnd={1}
                        duration={0.4}
                        style={{fontSize: 30, pathColor: `rgba(62, 152, 199, 0.5)`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7', }}>
                        <div style={{fontSize: 40, fontWeight: "bold"}}>
                        {
                                month < 10 ? "0" + month : month
                            } {today}
                        </div>
                     </CircularProgressbarWithChildren>

                    :

                    <CircularProgressbarWithChildren
                        valueStart={0}
                        valueEnd={2}
                        duration={1.4}
                        style={{fontSize: 30, pathColor: `rgba(62, 152, 199, 0.5)`,
                        textColor: '#f88',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',}}>
                        <div style={{fontSize: 40, fontWeight: "bold"}}>
                        {
                                month < 10 ? "0" + month : month
                            } {today}
                        </div>
                 </CircularProgressbarWithChildren>
        }
                </div>
        {
            hasTracked ? <p style={{padding: 20, fontSize: 16}}>Good job! One step closer to your goal! You have saved X energy today.</p> : <p style={{padding: 10}}>No data added yet.</p> 
        }

        {!hasTracked &&
            <Link style={styles.button} to="/track" element={Track}> 
                Track data
            </Link >
        }
            </div>
            <div style={{ display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <h1 className="headerText">Random daily fact</h1>
                <p>Livestock is responsible for 18% of greenhouse gases.</p>
            </div>
            <button onClick={() => app.auth().signOut()}>Sign out</button></div>
            ) : (<div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center', marginTop: '15%'}}>
            <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
              <h1 className='headerText'>You have not set a goal yet.</h1>
              <Link style={styles.button} to="/goallist" element={GoalList}> 
                    Set goal
              </Link >
            </div>
        </div>) 
            }
            
        </div>
    );
}

const container = {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 25,
    paddingRight: 15
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 25,
      paddingRight: 15
    },
    headerContainer:{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ED904C',
        marginTop: 22
    },
    paragraph: {
        marginTop: 10,
        fontSize: 16
    },
    currency: {
        backgroundColor: '#BCD980',
        borderRadius: 15,
        height: 50,
        padding: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    dataContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor:'#5D966D',
        marginTop: 10,
        padding: '12px 16px',
        borderRadius: 10,
        color: '#fff',
        fontSize: 16,
        border: 'none'
    },
    factsContainer: {
        flex: 2
    }
  };