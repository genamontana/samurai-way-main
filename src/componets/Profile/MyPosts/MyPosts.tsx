import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionsType, addPostActionCreator, ProfilePageType, updateNewPostTextActionCreator} from '../../../redux/state';


type MyPostsType = {
    posts: ProfilePageType
    dispatch: (action: ActionsType) => void
}

export const MyPosts = (props: MyPostsType) => {
    let postsElements = props.posts.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()


    let addPost = () => {
        props.dispatch(addPostActionCreator(props.posts.newPostText))
    }


    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value
            props.dispatch(updateNewPostTextActionCreator(text))
        }
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}
                          value={props.posts.newPostText}
                          onChange={onPostChange}
                />
            </div>
            <div>
                <button
                    onClick={addPost}
                >Add post
                </button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}