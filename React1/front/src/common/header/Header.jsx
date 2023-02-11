import './header.css'
import '../../compinent/button/Button'
import Button from '../../compinent/button/Button';

function Header() {
    return (
        <div className="header">
            Header
            <nav>
                <ul>
                    <li>
                        <a>Home</a>
                    </li>
                    <li>
                        <a>Post</a>
                    </li>
                    <li>
                        <a>From us</a>
                    </li>
                </ul>
            </nav>
            <Button text="Open" onClick={console.log('test')}/>
            <Button className='header__button' text="Open (with add class)"/>
        </div>
    );
}
export default Header;