import Badge from '../components/Badge';
import Currency from '../components/Currency';
import '../styles.css';

export default function Profile() {
    return (
        <div className='cont'>
            <div style={{display: 'flex', flexDirection:'row', borderBottomWidth: 1, borderColor: '#D9D9D9', backgroundColor: '#D9D9D9', borderRadius: 10}}>
                <div style={{ height: 50, marginTop: 20}}>
                    <img
                            style={{flex:1, width:40, height:40, resizeMode: 'cover'}}
                            source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/641/641693.png',
                            }} alt=""
                    />
                </div>
                <div style={{marginLeft: 40}}>
                    <h1 className='headerText'>Jane Doe</h1>
                    <p style={styles.paragraph}>Jane's cool bio</p>
                </div>
                <Currency currencyData="456"/>
            </div>
            
            <div>
                <div style={{ display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                    <h1 className='headerText'>Progress</h1>
                    <h1 className='headerText'>15 day streak</h1>
                </div>
                <div style={{height: 20, backgroundColor:'#333'}}></div>
            </div>
            

            <div>
                <h1 className='headerText'>Current goal</h1>
                <p style={{fontStyle: 'italic', fontSize: 18}}>Vegan for a month</p>
            </div>

            <div>
                <h1 className='headerText'>See the stats</h1>
                <p style={styles.paragraph}>Coming soon!</p>
            </div>

            <div>
                <h1 className='headerText'>Badges</h1>
                <Badge name="Fighter" description="this is a very cool and funny description of the received badge" />
                <Badge name="Fighter" description="this is a very cool and funny description of the received badge" />
                <Badge name="Fighter" description="this is a very cool and funny description of the received badge" />
                <Badge name="Fighter" description="this is a very cool and funny description of the received badge" />
                <Badge name="Fighter" description="this is a very cool and funny description of the received badge" />
                <Badge name="Fighter" description="this is a very cool and funny description of the received badge" />
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
      headerh1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ED904C',
        marginTop: 22
    },
    paragraph: {
        marginTop: 10,
        fontSize: 16,
    },
};