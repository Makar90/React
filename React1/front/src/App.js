//import logo from './logo.svg';
//import './App.css';


/*
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
*/

import Header from './common/header/Header';
import Footer from './common//footer/Footer';
import Button from './compinent/button/Button';
import './style/main.css'

function App() {
    return (
        <>
            {/* <p>APP</p>
            <p>double Header + Footer within APP START</p> */}
            <Header />

            <section>
                <h2> Section H2</h2>
                <Button />
                <Button text='Hello' />
                <Button text='Go' />
            </section>

            <Footer />
            {/* <p>double Header + Footer within APP END</p>
            <p>APP</p> */}
        </>

    );
}
export default App;