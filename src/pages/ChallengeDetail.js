import ChallengesList from '../components/ChallengesList';
import GoalDetailCard from '../components/GoalDetailCard';

export default function ChallengeDetail() {

    return (
        <div style={styles.container}>
            <ChallengeDetail />
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
      flexDirection: 'row'
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