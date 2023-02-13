//import * as MainJS from '../../scripts/main.js'

function NavMenu(props){
    
    let menuItems = props.menuItems.map(function(menuItem, menuIndex) {
        return (
            <li key={`${menuIndex}`} className={`menu__item ${props.classNameItem || ""}`}>
                <a  className={`menu__item-link ${props.classNameItemLink || ""}`} href={`${menuItem.link || `Лінка#${menuIndex+1}`}`}>
                    {`${menuItem.name || `Пункт-${menuIndex+1}`}`}  
                </a>
            </li>
            );
        });

    function getMenuList() {            
        if (props.menuStyleOrdered){
            console.log('menuStyleOrdered');
            return (
                <ol className={`menu__list ${props.classNameList || ""}`}>
                    {menuItems}
                </ol>
            );
        }else {
            console.log('- menuStyleOrdered');
            return (
                <ul className={`menu__list ${props.classNameList || ""}`}>
                    {menuItems}
                </ul>
            );
        }
    };

    return (
        <nav className={`menu ${props.classNameMenu || ""}`}>         
            {getMenuList()}
        </nav>
        );
    
    /* (
        <nav className={`nav ${props.classNameMenu || ""}`}>
            <ul className={`nav__list ${props.classNameList || ""}`}>
                <li className={`nav__item ${props.classNameItem || ""}`}>
                    <a  className={`nav__item-link ${props.classNameItemLink || ""}`} href={props.ItemLink1 || "#"}>
                         {props.ItemText1 || "Пункт 1"}  
                    </a>
                </li>
                <li className={`nav__item ${props.classNameItem || ""}`}>
                    <a  className={`nav__item-link ${props.classNameItemLink || ""}`} href={props.ItemLink2 || "#"}>
                         {props.ItemText2 || "Пункт 1"}  
                    </a>
                </li>
                <li className={`nav__item ${props.classNameItem || ""}`}>
                    <a  className={`nav__item-link ${props.classNameItemLink || ""}`} href={props.ItemLink3 || "#"}>
                         {props.ItemText3 || "Пункт 1"}  
                    </a>
                </li>
            </ul>
        </nav>
    ); */
}
export default NavMenu;