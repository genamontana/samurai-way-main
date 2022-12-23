import React from 'react';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from '../../redux/state';

type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsTypes ) => void
}

export const Profile = (props: ProfileType) => {

    return <div>
        <ProfileInfo/>
        <MyPosts
            posts={props.profilePage}
            dispatch={props.dispatch}
        />
    </div>
}