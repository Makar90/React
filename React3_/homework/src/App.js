import { UsersBase } from "./data/users/Users";
import './styles.css';

import Header from './common/header/Header';
import Main from './common/main/Main';


console.log(UsersBase);


function App() {
    return (
        <>
            <Header title='Posters catalog' />
            <Main />
        </>
    );
}

export default App;
