//import Container from '../container/Container';
import NavMenu from '../../components/navMenu/NavMenu.jsx';


function Header(props){
    return(
            <header className="header">
                <div className="container header__container">
                    <h1>Hello</h1>                
                    <NavMenu 
                        menuStyleOrdered={true}
                        classNameMenu="header__menu"
                        classNameList="header__menu-list"
                        classNameItem="header__menu-item"
                        classNameItemLink="header__menu-link"                        
                        menuItems={[
                                    {
                                        name:'',
                                        link: ''
                                    },
                                    {
                                        name:'',
                                        link: ''
                                    },{
                                        name:'',
                                        link: ''
                                    },{
                                        name:'',
                                        link: ''
                                    },{
                                        name:'',
                                        link: ''
                                    },{
                                        name:'',
                                        link: ''
                                    },
                                ]}
                    />
                </div>
                <a href="https://github.com/Makar90/React/tree/main/React1/HomeWork">
                    GitHub
                </a>
            </header>
    );
}

export default Header;