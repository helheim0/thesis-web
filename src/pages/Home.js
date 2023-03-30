import Currency from "../components/Currency";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "../styles.css";
import {
    BrowserRouter,
    Routes, //replaces "Switch" used till v5
    Route,
  } from "react-router-dom";
  import { Link } from "react-router-dom";
import Track from "./Track";
import app from '../firebaseConfig';

export default function Home() { 
    const hasTracked = false;
    const date = new Date();
    const today = date.getDate() + "."+ date.getMonth()+1;

    return (
        <div className="cont">
            <div style={container}>
                <Currency />
            </div>
            <div style={{padding: '4rem'}}>
                <h1 className="headerText">Current goal: veganuary</h1>
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
                            {today}
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
                            {today}
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
            <div>
                <h1 className="headerText">Random daily fact</h1>
                <p>Livestock is responsible for 18% of greenhouse gases.</p>
            </div>
            <button onClick={() => app.auth().signOut()}>Sign out</button>
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