import React from 'react';
import s from './Profile.module.css';

export const Profile = () => {
    return <div className={s.content}>
        <div><img className={s.img}
                  src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                  alt="image"/></div>
        <div>ava + description</div>
        <div>My posts
            <div>New post</div>
            <div className={s.posts}>
                <div className={s.item}>post_1</div>
                <div className={s.item}>post_2</div>
            </div>
        </div>
    </div>
}