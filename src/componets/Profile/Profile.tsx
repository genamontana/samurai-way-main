import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../index';

type ProfileType = {
    posts: PostType[]
}
export const Profile = ({posts}: ProfileType) => {    {/*здесь сделал как научил Артем*/}

    return <div>
        <ProfileInfo/>
        <MyPosts posts={posts}/>  {/*здесь сделал как научил Артем*/}
    </div>
}