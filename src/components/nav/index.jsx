import { Link } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navbar(){
    return(
        <div className='nav'>
            <div className='links'>
            <Link to="/Dashboard"> Dashboard </Link>
            <Link to="/Food & Drinks"> Food & Drinks</Link>
            <Link to="/Messages"> Messages</Link>
            <Link to="/Settings"> Settings</Link>
            </div>
        </div>
    )
}