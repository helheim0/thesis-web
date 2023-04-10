import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../styles.css';
import Currency from '../components/Currency';
import ChallengesList from "../components/ChallengesList";
import app from '../firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs } from "firebase/firestore";
import { Link, Route, Switch } from "react-router-dom";
import GoalDetail from "./GoalDetail";

const GoalList = props => {

    const [input, setInput] = useState('');
    const [goals, setGoals] = useState([]);

    const fetchPost = async () => {
       
        await getDocs(collection(db, "goals"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setGoals(newData);                
                console.log(goals, newData);
            })
       
    }
    useEffect(() => {
        fetchPost();

      }, []);

    return (
        <div className="cont">
        <div style={styles.headerContainer}>
            <h1 className='headerText'>Available goals</h1>
            <h3 style={styles.paragraph}>Pro tip: for consistence and better results, try focusing on one for now.</h3>
        </div>
       
       <div style={styles.listContainer}>
        <div style={styles.list}> 
        {goals.map(item => (
          <div key={item.id}>
            <Link 
            to={{
              pathname: `/goaldetail/${item.id}`,
              state: { goals: item } 
            }}

            params={{id: item.id, name: item.name, description: item.description}}
            >
            <ChallengesList name={item.name}/>
            </Link>
          </div>
        ))}
        </div>
       </div> 
       <Switch>
        <Route
          path="/goallist/:id"
          render={({ match }) => (
            <GoalDetail
              product={goals.find(
                (goal) => String(goal.id) === match.params.id
              )}
            />
          )}
        />
      </Switch> 
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
    },listContainer: {
        display: 'block',
        width: 200,
        alignItems: 'center',
        margin: '0 auto'
    },
    list: {
    }
};

export default GoalList;