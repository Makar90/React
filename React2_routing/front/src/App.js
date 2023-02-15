import { Route, Routes, Link } from 'react-router-dom';

import Header from './common/header/Header';

import Home from './pages/home/Home.jsx'
import Blog from './pages/blog/Blog';
import Contact from './pages/contact/Contact';
import FromUs from './pages/from-us/From-us';

import Article from './common/article/Article';

import Footer from './common/footer/Footer';


import './main.css';

function App() {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/from-us' element={<FromUs />} />
                    <Route path='*' element={<h1>404</h1>} />
                </Routes>
                <Article />
            </main>
            <Footer />
        </div>
    );
}

export default App;
