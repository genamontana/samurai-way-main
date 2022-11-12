import React from 'react';
import s from './Post.module.css';

type postType = {
    message: string
    likesCount: number
}

export const Post = ({message, likesCount}: postType) => {
    {/*здесь сделал как научил Артем props передал чуть иначе и теперь не нужно их далее писать через props.*/
    }
    return (
        <div className={s.item}>
            <img src="https://photo.sibnet.ru/upload/imgbig/127141997158.jpg" alt="bin"/>
            {message} {/*здесь сделал как научил Артем*/}
            <div>
                <span>like</span>
                {likesCount} {/*здесь сделал как научил Артем*/}
            </div>
        </div>)
}
