import { Link } from 'react-router-dom';
import ChallengesList from '../components/ChallengesList';
import GoalDetailCard from '../components/GoalDetailCard';
import '../styles.css';
import ChallengeDetail from './ChallengeDetail';

export default function Challenges() {
    const hasChallenge = false;

    return (
        <div className="cont">
        <div style={styles.headerContainer}>
            <h1 className='headerText'>Available challenges</h1>
            {
                !hasChallenge ? <div><h3>You have not joined any challenge yet.</h3><p style={styles.paragraph}>Browse the available challenges and join one today!</p></div> 
                : <div>
                    <h3>Your current challenge(s):</h3>
                </div>
            }
        </div>
       
       <div style={styles.listContainer}>
        <div style={styles.list}>
            <Link to='/challengedetail' element={ChallengeDetail}>
        <ChallengesList name="veganuarz"/></Link>
        <ChallengesList name="title"/>
        <ChallengesList name="title"/>
        <ChallengesList name="title"/>
        <ChallengesList name="title"/>
        </div>
       </div>  
    </div>
    );
}

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingLeft: 25,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 100,
      flexDirection: 'row',
    
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ED904C',
    },
    paragraph: {
        marginTop: 10,
        fontSize: 16,
        fontStyle: 'italic',
        fontWeight: 400
    },
    headerContainer: {
        textAlign: 'center',
        paddingBottom: 20
    },
    listContainer: {
        display: 'block',
        width: 200,
        alignItems: 'center',
        margin: '0 auto'
    },
    list: {
    }
  };