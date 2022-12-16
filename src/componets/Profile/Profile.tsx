import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsType, PostType} from '../../redux/state';

type ProfileType = {
    profilePage: PostType[]
    dispatch: (action: ActionsType ) => void
    newPostText: string
}

export const Profile = (props: ProfileType) => {


    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.profilePage}
            dispatch={props.dispatch}
            newPostText={props.newPostText}
        />
    </div>
}