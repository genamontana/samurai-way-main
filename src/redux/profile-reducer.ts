import {PostType, ProfilePageType} from './state';

export type ActionsTypesProfile = TypeAddPost | TypeUpdatePostText

export type TypeAddPost = ReturnType<typeof addPostActionCreator>
export type TypeUpdatePostText = ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = (postText: string) => {
    return{
    type: 'ADD-POST',
    newPostText: postText,
} as const}
export const updateNewPostTextActionCreator = (newText: string) => {
    return {
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
} as const}


const profileReducer = (state: ProfilePageType, action: ActionsTypesProfile) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: '5',
                message: action.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost);
            state.newPostText = ''
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText
            break;
    }
    return state
}

export default profileReducer;
