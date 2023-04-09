
import GoalDetailCard from '../components/GoalDetailCard';

export default function GoalDetail(props) {
    const {name, description, duration} = props.goal;

    return (
        <div style={styles.container}>
            <GoalDetailCard  name={name} description={description} duration={duration} />
        </div>
    );
}

const styles = {
    container: {
      display: 'flex',
      flex: 2,
      backgroundColor: '#fff',
      paddingLeft: 25,
      paddingRight: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 200,
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