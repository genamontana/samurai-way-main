import {ActionsType, PostType, ProfilePageType} from './state';



const profileReducer = (state: ProfilePageType, action: ActionsType) => {
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
