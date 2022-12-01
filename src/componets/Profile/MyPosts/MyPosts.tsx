import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
    newPostText: string
    onPostChange: (newText: string) => void
}


export const MyPosts = (props: MyPostsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()


    let addPost = () => {
        props.addPost(props.newPostText)
    }


    const onPostChange = () => {
        if(newPostElement.current){
        props.onPostChange(newPostElement.current.value)
        }
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
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