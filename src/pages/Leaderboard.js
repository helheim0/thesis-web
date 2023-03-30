import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../styles.css';
import Currency from '../components/Currency';
import List from '../data/List';
import { getInitialData, genNextData } from "../data/index.js";

export default function Leaderboard() {

    const [data, setData] = useState(getInitialData());
    const doSwitch = () => {
      setData(d => {
        [d[0], d[1]] = [d[1], d[0]];
        d[0].score += 1000;
        d[1].score += 2000;
        return [...d];
      });
    };
    useEffect(() => {
      // const timer = setInterval(() => setData(genNextData()), 1000);
      // return () => clearInterval(timer);
    }, []);
  
    return (
        <div style={styles.container}>
            <div>
              <h1 className='headerText'>Novice league</h1>
              <Currency currencyData="456" />
              <List data={data} />
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