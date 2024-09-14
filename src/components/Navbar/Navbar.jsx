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
                        <NavLink to="/category/Fender" className={({isActive}) => (isActive ? 'link active' : 'link')}>FENDER</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Gibson" className={({isActive}) => (isActive ? 'link active' : 'link')}>GIBSON</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Ibanez" className={({isActive}) => (isActive ? 'link active' : 'link')}>IBANEZ</NavLink>
                    </li>

                </ul>

            </div>

            <CartWidget/>

        </nav>
        
    )
}

export default Navbar;