import StoreItem from '../components/StoreItem';
import { IoLockClosed } from "react-icons/io5";

export default function Store() {

    return (
        <div className='cont'>
            <div >
                <h1 className='headerText'>Recipes</h1>
                <div >
                    <div style={styles.recipesContainer}>  
                            <StoreItem  name="Salad" price="50"/>
                            <StoreItem name="Salad" price="50" isLocked = "false"/>
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