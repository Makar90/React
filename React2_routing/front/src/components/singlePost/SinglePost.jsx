
/* homework: 45 React: Routing start*/
import { Link } from "react-router-dom";
import './index.css'

function SinglePost(props){
    
    let posts={
        post1:{
            title:'Новина 1', 
            text: 'Lorem №1 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.',
            date:'01.01.2023',
        },
        post2:{
            title:'Новина 2', 
            text:'Lorem №2 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.', 
            date:'02.01.2023',
        },
        post3:{
            title:'Новина 3', 
            text:'Lorem №3 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.', 
            date:'03.01.2023',
        },
        post4:{
            title:'Новина 4', 
            text:'Lorem №4 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.', 
            date:'04.01.2023',
        },
        post5:{
            title:'Новина 5', 
            text:'Lorem №5 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.', 
            date:'05.01.2023',
        },
        post6:{
            title:'Новина 6', 
            text:'Lorem №6 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.', 
            date:'06.01.2023',
        },
        post7:{
            title:'Новина 7', 
            text:'Lorem №7 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.', 
            date:'07.01.2023',
        },
        post8:{
            title:'Новина 8', 
            text:'Lorem №8 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.', 
            date:'08.01.2023',
        },
        post9:{
            title:'Новина 9', 
            text:'Lorem №9 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.', 
            date:'09.01.2023',
        },
        post10:{
            title:'Новина 10', 
            text:'Lorem №10 ipsum dolor sit amet consectetur, adipisicing elit. Labore doloribus nostrum minima, aliquam id sequi.', 
            date:'10.01.2023',
        },
        getRandomDate() {
            const maxDate = Date.now();
            const timestamp = Math.floor(Math.random() * maxDate);
            return new Date(timestamp);
        }
    };
    let post = posts[props.post];

    return(
        <div className="post">
            <h2>News</h2>
            <ul className="post__menu">
                <li className="post__item">
                    <Link to='/blog/post1'>Post 1</Link>
                </li>
                <li className="post__item">
                    <Link to='/blog/post2'>Post 2</Link>
                </li>
                <li className="post__item">
                    <Link to='/blog/post3'>Post 3</Link>
                </li>
                <li className="post__item">
                    <Link to='/blog/post4'>Post 4</Link>
                </li>
                <li className="post__item">
                    <Link to='/blog/post5'>Post 5</Link>
                </li>
                <li className="post__item">
                    <Link to='/blog/post6'>Post 6</Link>
                </li>
                <li className="post__item">
                    <Link to='/blog/post7'>Post 7</Link>
                </li>
                <li className="post__item">
                    <Link to='/blog/post8'>Post 8</Link>
                </li>
                <li className="post__item">
                    <Link to='/blog/post9'>Post 9</Link>
                </li>
                <li className="post__item">
                    <Link to='/blog/post10'>Post 10</Link>
                </li>
            </ul>
            <h2 className="post__title">{post.title}</h2>
            <p className="post__text">{post.text}</p>
            <p className="post__date">{post.date}</p>
        </div>
    );
}

export default SinglePost;
/* homework: 45 React: Routing start*/