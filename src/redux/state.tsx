export type PostType = {
    id: string
    message: string
    likesCount: number
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: PostType[]
}
export type MessagesPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likesCount: 12,},
            {id: '2', message: 'It\'s my first post', likesCount: 11,},
            {id: '3', message: 'Hello', likesCount: 11,},
            {id: '4', message: 'Yes', likesCount: 11,},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Gena',},
            {id: '2', name: 'Andrey',},
            {id: '3', name: 'Svetlana',},
            {id: '4', name: 'Victor',},
            {id: '5', name: 'Aleksandr',},
            {id: '6', name: 'Valera',},
        ],
        messages: [
            {id: '1', message: 'Hi',},
            {id: '2', message: 'How is your it-incubator?',},
            {id: '3', message: 'Yo!',},
            {id: '4', message: 'Yo!',},
            {id: '5', message: 'Yo!',}
        ],
    },
}

export let addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: '5',
        message: postMessage,
        likesCount: 0,
    }
    state.profilePage.posts.push(newPost)
}

export default state;