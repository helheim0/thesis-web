import ChallengesList from '../components/ChallengesList';
import GoalDetailCard from '../components/GoalDetailCard';
import '../styles.css';

export default function Challenges() {

    return (
        <div className="cont">
        <div style={styles.headerContainer}>
            <h1 className='headerText'>Set your goal</h1>
            <h3 style={styles.paragraph}>Pro tip: for consistence and better results, try focusing on one for now.</h3>
        </div>
       
       <div style={styles.listContainer}>
        <div style={styles.list}>
        <ChallengesList name="veganuarz"/>
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