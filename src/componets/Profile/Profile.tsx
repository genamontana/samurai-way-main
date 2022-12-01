import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostType} from '../../redux/state';

type ProfileType = {
    profilePage: PostType[]
    addPost: (postMessage: string) => void
    newPostText:string
    onPostChange: (newText: string) => void
}

export const Profile = (props: ProfileType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.profilePage}
            addPost={props.addPost}
            newPostText={props.newPostText}
            onPostChange={props.onPostChange}
        />
    </div>
}