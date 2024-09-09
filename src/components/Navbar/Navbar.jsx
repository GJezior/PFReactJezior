import './Navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        
        <nav className='navbar'>

            <div className='navbar-logo'>

                <Link to="/">OverDrive</Link>

            </div>

            <div className='navbar-container'>

                <ul className='navbar-links'>

                    <li>
                        <Link to="/category/Fender" className='link'>FENDER</Link>
                    </li>
                    <li>
                        <Link to="/category/Gibson" className='link'>GIBSON</Link>
                    </li>
                    <li>
                        <Link to="/category/Ibanez" className='link'>IBANEZ</Link>
                    </li>

                </ul>

            </div>

            <CartWidget/>

        </nav>
        
    )
}

export default Navbar;