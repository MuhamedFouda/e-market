import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./index.scss"
import { Link } from 'react-router-dom'
import img from './download.png'

export default function Aside(){
    return(
        <div className='aside '>
            <div className='links'>
            <h1> e- <span> Market</span></h1>
            <Link to="/Dashboard"> Dashboard </Link>
            <Link to="/Food & Drinks"> Food & Drinks</Link>
            <Link to="/Messages"> Messages</Link>
            <Link to="/Settings"> Settings</Link>
            </div>
            <div className='foot'>
                <img src={require("./download.png")}/>
                <span> Designed By: Eng/Muhamed Fouda </span>
            </div>
        </div>
    )
}