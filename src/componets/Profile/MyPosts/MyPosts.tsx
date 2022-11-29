import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {PostType} from '../../../redux/state';

type MyPostsType = {
    posts: PostType[]
    addPost: (postMessage: string) => void
}


export const MyPosts = (props: MyPostsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = ()=> {
        let text = newPostElement.current?.value
        alert(text)
    }

    return <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement} ></textarea>
            </div>
            <div>
                <button
                    onClick={()=>props.addPost}>Add post
                </button>
            </div>
        </div>
        <div className={s.posts}>
            {postsElements}
        </div>
    </div>
}