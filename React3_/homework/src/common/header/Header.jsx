import Container from '../container/Container';
import './index.css';


function Header(props){
    let content = 
        <>           
        <svg className='header__menuIcon header__icon' fill="currentColor" width="800px" height="800px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <path d="M1920 1468.412v112.94H0v-112.94h1920Zm0-564.706v112.941H0V903.706h1920ZM1920 339v112.941H0V339h1920Z" fill-rule="evenodd"/>
        </svg>

        <h1>{props.title}</h1>           

        <ul className='header__actionsMenu'>
            <li className='header__refreshAction'>
                <svg className='header__refreshIcon header__icon' fill="currentColor" height="800px" width="800px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 489.645 489.645">
                    <g>
                        <path d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3
                            c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5
                            c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8
                            c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2
                            C414.856,432.511,548.256,314.811,460.656,132.911z"/>
                    </g>
                </svg>
            </li>
            <li className='header__userAction'>
                <svg className='header__userIcon header__icon' width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" fill="white"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14C8.68629 14 6 11.3137 6 8Z" fill="currentcolor"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.43094 16.9025C7.05587 16.2213 9.2233 16 12 16C14.771 16 16.9351 16.2204 18.5586 16.8981C20.3012 17.6255 21.3708 18.8613 21.941 20.6587C22.1528 21.3267 21.6518 22 20.9592 22H3.03459C2.34482 22 1.84679 21.3297 2.0569 20.6654C2.62537 18.8681 3.69119 17.6318 5.43094 16.9025Z" fill="currentcolor"/>
                </svg>
            </li>
        </ul>

        {/* <img className="fit-picture"
            src="/media/cc0-images/grapefruit-slice-332-332.jpg"
            alt="hamburger menu icon" /> */}

        </>

    return(
        <>
        <header className="header">
            <Container containerClassName='header__container'  
                        containerContents={content}
            />                 
        </header>
        </>
    );
}

export default Header;