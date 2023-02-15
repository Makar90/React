import { Route, Routes } from 'react-router-dom';

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
                    {/* homework: 45 React: Routing start*/}
                    <Route path='/blog/post1' element={<Blog post='post1' />} />
                    <Route path='/blog/post2' element={<Blog post='post2' />} />
                    <Route path='/blog/post3' element={<Blog post='post3' />} />
                    <Route path='/blog/post4' element={<Blog post='post4' />} />
                    <Route path='/blog/post5' element={<Blog post='post5' />} />
                    <Route path='/blog/post6' element={<Blog post='post6' />} />
                    <Route path='/blog/post7' element={<Blog post='post7' />} />
                    <Route path='/blog/post8' element={<Blog post='post8' />} />
                    <Route path='/blog/post9' element={<Blog post='post9' />} />
                    <Route path='/blog/post10' element={<Blog post='post10' />} />
                    {/* homework: 45 React: Routing end*/}
                </Routes>
                <Article />
            </main>
            <Footer />
        </div>
    );
}

export default App;
