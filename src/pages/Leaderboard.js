import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../styles.css';
import Currency from '../components/Currency';
import List from '../data/List';
import { getInitialData} from "../data/index.js";
import app from '../firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot, orderBy } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs } from "firebase/firestore";
import { IoPersonSharp } from "react-icons/io5";
import * as _ from "lodash";

export default function Leaderboard() {

    const [data, setData] = useState(getInitialData());
    let [users, setUsers] = useState([]);

    const fetchPost = async () => {
       
      await getDocs(collection(db, "users"))
          .then((querySnapshot)=>{               
              const newData = querySnapshot.docs
                  .map((doc) => ({...doc.data(), id:doc.id }));
                  setUsers(newData);                
              console.log(users, newData);
          })
     
  }
  useEffect(() => {
      fetchPost();

    }, []);

    return (
        <div style={styles.container}>
            <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'space-between'}}>
              <h1 className='headerText' style={{paddingTop: 20, paddingBottom: 20}}>Novice league</h1>
              {
              users.sort((a, b) => a.score < b.score ? 1:-1).map((user,i)=>(
                
              <div key={i} style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 30}}>
                <IoPersonSharp size={40} color="tomato" />
                <p style={{fontSize: 20, fontWeight: 'bold'}}>{user.name}</p>
                <p style={{marginLeft: 40}}>{user.score}</p>
              </div>
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
      headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ED904C',
        marginTop: 22,
        textAlign: 'center',
        paddingTop: 20
    },
    paragraph: {
        marginTop: 10,
        fontSize: 16,
    },
};