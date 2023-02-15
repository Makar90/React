import './index.css';
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
            <header className='header'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li> 
                        <Link to='/contact'>Contact us</Link>
                    </li>
                    <li>
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li>
                        <Link to='/from-us'>From us</Link>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Header;