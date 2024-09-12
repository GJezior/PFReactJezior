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
                        <NavLink to="/category/Fender" className='link' activeClassName="active">FENDER</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Gibson" className='link' activeClassName="active">GIBSON</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/Ibanez" className='link' activeClassName="active">IBANEZ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className='link' activeClassName="active">CONTACTO</NavLink>
                    </li>
                </ul>

            </div>

            <CartWidget/>

        </nav>
        
    )
}

export default Navbar;