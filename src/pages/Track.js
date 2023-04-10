import React, { useState, useEffect } from "react";
import StoreItem from '../components/StoreItem';
import { IoLockClosed } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import SearchBar from '../components/Searchbar';
import { IoFlashOutline } from 'react-icons/io5';
import { IoEllipseSharp } from 'react-icons/io5';
import app from '../firebaseConfig';
import { getFirestore, collection, query, where, onSnapshot } from "firebase/firestore";
import {db} from '../firebaseConfig';
import { doc, getDocs } from "firebase/firestore";

export default function Track() {

    const [food, setFood] = useState([]);
    const [value, setValue] = useState("");
    const [results, setResults] = useState([]);
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        console.log("search",  searchTerm);
    }
    let energySaved = 0;

    const loadBadges = async () => {
       
        await getDocs(collection(db, "food"))
            .then((querySnapshot)=>{               
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data(), id:doc.id }));
                    setFood(newData);                
                console.log(food, newData);
            })
       
    }
    useEffect(() => {
      loadBadges();

      }, []);
    return (
        <div className='cont'>
            <div>
                <div className='header'  style={styles.headerContainer}>
                    <h1 className='headerText'>
                        What did you eat today?
                    </h1>
                </div>
                <div style={styles.searchContainer}>
                    <input type="text" 
                    value={value}  onChange={(event) => {
                        setValue(event.target.value);
                    }} />
               {/* <TextField
                    id="outlined-basic"
                    variant="outlined"
                    fullWidth
                    label="Search"
                    
                    /> */}
                    <div className='list' style={styles.list}>
                        <ul>
                            {
                                food.filter(item => {
                                    const searchTerm = value.toString().toLowerCase();
                                    const name = item.name.toString().toLowerCase();

                                    return (searchTerm && name.startsWith(searchTerm) && name !== searchTerm);
                                }).slice(0, 15).map((item, i) => (
                                    <div key={i} style={styles.listItem} >
                                        <IoEllipseSharp size={16} color="tomato"/>
                                        <li>{item.name}</li>
                                        {
                                        !item.isGood ? <p>-</p> : null
                                        }
                                        <p>{item.reward}</p>
                                        <IoFlashOutline size={20} color='tomato'/>
                                    </div>
                                    ))
                            }
                        </ul>
                    </div>
                   {/* <SearchBar onChange={(event) => {
                        setValue(event.target.value);
                    }} 
                    value={value}/>*/}
                    <div style={{display: 'flex', flexDirection:'row', alignItems: 'center', justifyContent:'center', padding: 6}}>
                        <h3>
                            Total energy saved:
                        </h3>
                        <h3 style={{paddingLeft: 6, paddingRight: 6}}>{energySaved}</h3>
                        <IoFlashOutline />
                    </div>       
                </div>
                <div  style={styles.footer}>
                    <p style={styles.paragraph}>
                        Based on your daily food intake you managed to contribute to the mitigation of GHG. Good job!
                    </p>
                </div>
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
    footer: {
        backgroundColor: '#D9D9D9',
        padding: 20,
        textAlign: 'center'
    },
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        fontSize: 18
    }
};