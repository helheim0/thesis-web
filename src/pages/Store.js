import React, { useState, useEffect } from "react";
import StoreItem from '../components/StoreItem';
import { IoLockClosed } from "react-icons/io5";
import { IoFastFood } from "react-icons/io5";
import firebase from 'firebase/compat/app';
import { collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs, getFirestore  } from "firebase/firestore";
import Currency from "../components/Currency";

export default function Store() {
    let user = firebase.auth().currentUser;
    let userCurrency = user.currency;

    const [recipes, setRecipes] = useState([]);

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
        fetchPost();

      }, []);

    const unlock = () => {

    }

    return (
        <div className='cont'>
            <div >
                <Currency />
                <h1 className='headerText'>Recipes</h1>
                <div >
                    <div style={styles.recipesContainer}>  
                    {
                        recipes?.map((recipe,i)=>(
                            <div>
                                <StoreItem name={recipe.name} price={recipe.cost} isLocked = {recipe.isLocked}/>
                        </div>
                        ))
                    } </div>
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