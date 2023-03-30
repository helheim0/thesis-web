import { Link } from "react-router-dom";
import "../styles.css";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline} from "react-icons/io5";
import { IoGolfOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoTrophyOutline } from "react-icons/io5";

export default function Navbar() {
    return <nav className="nav">
        <ul>
            <li>
                <Link to="/">Home</Link>
                <IoHomeOutline size={40}
                        color="beige"/>
            </li>
            <li>
                <Link to="/challenges">Challenges</Link>
                <IoGolfOutline size={40}
                        color="beige" />
            </li>
            
            <li>
                <Link to="/leaderboard">Leaderboard</Link>
                <IoTrophyOutline size={40}
                        color="beige"/>
            </li>
            <li>
                <Link to="/store">Store</Link>
                <IoStorefrontOutline size={40}
                        color="beige"/>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
                <IoPersonOutline size={40}
                        color="beige"/>
            </li>
            
        </ul>
    </nav>
}
