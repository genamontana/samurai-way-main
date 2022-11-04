import React from 'react';
import s from './Post.module.css';
import {Simulate} from 'react-dom/test-utils';
import input = Simulate.input;

export const Post = () => {
    return <div className={s.item}>
        <img src="https://photo.sibnet.ru/upload/imgbig/127141997158.jpg" alt="bin"/>
        post_1
        <div>
            <span>like</span>
        </div>
        <input value='5'/>
        <input value='6'/>
    </div>


}