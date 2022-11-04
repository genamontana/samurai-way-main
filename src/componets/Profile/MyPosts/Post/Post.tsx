import React from 'react';
import s from './Post.module.css';

export type PostType = {
    message: string
    likesCount: number
}

export const Post = (props:PostType ) => {
    return <div className={s.item}>
        <img src="https://photo.sibnet.ru/upload/imgbig/127141997158.jpg" alt="bin"/>
        {props.message}
        <div>
            <span>like</span>  {props.likesCount}
        </div>
    </div>


}