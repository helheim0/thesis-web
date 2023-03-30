import React from 'react';

export default function StoreDetail() { 
        return (
            <div>
                <h1 style={styles.headerText}>Store item detail</h1>
            </div>
        );
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      paddingTop: 5
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ED904C',
        marginTop: 22
    },
    paragraph: {
        marginTop: 10,
        fontSize: 16,
    }
};