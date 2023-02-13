import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './common/header/Header.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <p>
    1: Зробити Header footer <br/>
    2: Секцію > картинка + кнопка
    3: використовувати scss
    </p> */}
        <Header />
    </React.StrictMode>

);


