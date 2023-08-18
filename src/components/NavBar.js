import {Link} from 'react-router-dom'
import '../components/navbar.css'

const NavBar = () => {
    return(
        <div className="navbar">
            <Link to='/'>Home</Link>
            <Link to='help'>Help</Link>
        </div>
    )
}
export default NavBar