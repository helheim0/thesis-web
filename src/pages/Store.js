import React, { useState, useEffect } from "react";
import StoreItem from '../components/StoreItem';
import { IoLockClosed } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import firebase from 'firebase/compat/app';
import { collection, query, where, onSnapshot ,Timestamp, updateDoc } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs, getFirestore, Firestore  } from "firebase/firestore";
import Currency from "../components/Currency";
import { Alert } from "react-ionicons";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const Store = props =>  {
    let user = firebase.auth().currentUser;
    let userCurrency = user.currency;
    let userId = user.uid;
    let { id } = useParams();
    const [challenges, setChallenges] = useState("");
    const { state } = useLocation();
    const [currency, setCurrency] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [recipeCost, setRecipeCost] = useState("");


    const fetchPost = async () => {
       
        await getDocs(collection(db, "recipes"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setRecipes(newData);               
                console.log(recipes, newData);
            })
    }
    
    useEffect(() => {
        const fetchPost = async () => {
          
          const q = query(collection(db, "recipes"));
    
          const querySnapshot = await getDocs(q);
    
          const rec = querySnapshot.docs[0]?.data(); //getting the only user data
    
          if (rec.hasOwnProperty("cost")) {
            setRecipeCost(rec.cost);
          } else {
            setRecipeCost(""); //if goal not exists or empty set current goal as ""
          }
        };
    
        fetchPost();
      }, []);

    useEffect(() => {
        fetchPost();
      }, []);
      
    function handleUpdate(){
        const ref = doc(db, "users", userId);
        const foodRef = doc(db, "recipes", "id");
        console.log("currency: " + currency);
        console.log("cost: " + recipeCost);
        if(currency >= recipeCost){
            recipes.isLocked = false;
            const newData = currency - recipeCost;
            console.log("unlocked, remaining balance: " + newData);
            
            setCurrency(newData);
            updateDoc(ref, {
                currency: currency
            }, foodRef, {
                isLocked: false
            }).then(response => {
                alert("updated");
            }).catch(error => {
                console.log(error.message);
            })
        }
        else {
            console.log("error");
        }
        
    }
    useEffect(() => {
        const fetchPost = async () => {
          
          const q = query(collection(db, "users"), where("id", "==", userId));
    
          const querySnapshot = await getDocs(q);
    
          const userData = querySnapshot.docs[0]?.data(); //getting the only user data
    
          if (userData.hasOwnProperty("currency")) {
            const curr = userData.currency;
            console.log("userdata currency: " + curr);
            setCurrency(userData.currency); //if goal exists and not empty set current goal
            console.log("set currency: " + currency);
          } else {
            setCurrency(""); //if goal not exists or empty set current goal as ""
          }
        };
    
        fetchPost();
      }, []);
    return (
        <div className='cont'>
            <div >
                <Currency />
                <h1 className='headerText'>Recipes</h1>
                <div >
                    <div style={styles.recipesContainer}>  
                    {
                        recipes?.map((recipe,i)=>{
                            if(recipe.isLocked === true){
                                return (<div key={i}><StoreItem  key={i} name={recipe.name} price={recipe.cost} isLocked = {recipe.isLocked}/>
                                <button onClick={handleUpdate} params={recipe.cost}>Unlock</button></div>);
                            }
                            else {
                                return (
                                <div key={i}>
                                    <Link 
                                    to={{
                                    pathname: `/recipes/${recipe.id}`,
                                    state: { recipes: recipe } 
                                    }}
                        
                                    params={{id: recipe.id, name: recipe.name, description: recipe.description}}
                                    >
                                        <StoreItem name={recipe.name} price={recipe.cost} isLocked = {recipe.isLocked}/>
                                 </Link>
                                 <button disabled>Unlocked</button>
                                </div>);
                            }
                            
                            })}
                     </div>
                </div>
            </div>

            <div style={styles.gamesContainer}>
                <h1 className='headerText'>Mini games</h1>
                <h3>Coming soon</h3>
            </div>

            <div style={styles.customContainer}>
                <h1 className='headerText'>Customizables</h1>
                <h3>Coming soon</h3>
            </div>

            <div style={styles.otherContainer}>
                <h1 className='headerText'>Other</h1>
                <h3>Coming soon</h3>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#fff',
      },headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ED904C',
        marginTop: 22
    },
    recipesContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    paragraph: {
        marginTop: 10,
        fontSize: 16,
    },

};

export default Store;