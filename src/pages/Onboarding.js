import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import '../styles.css';
import Currency from '../components/Currency';

export default function Onboarding() {

    return (
        <div style={styles.container}>
            <div>
              <h1 className='headerText'>Onboarding</h1>
             
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