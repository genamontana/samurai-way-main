import React from 'react';
import s from './Header.module.css';


export const Header = () => {
    return <header className={s.header}>
        <img className={s.header__img}
             src="https://www.adobe.com/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"
             alt="logo-company"/>
    </header>
}