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
    newPostText: string
}
export type MessagesPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: '1', message: 'Hi, how are you?', likesCount: 12,},
                {id: '2', message: 'It\'s my first post', likesCount: 11,},
                {id: '3', message: 'Hello', likesCount: 11,},
                {id: '4', message: 'Yes', likesCount: 11,},
            ],
            newPostText: '',
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
            newMessageBody: '',
        },
    },
    _callSubscriber() {
        console.log('State change')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: '5',
                message: action.newPostText,
                likesCount: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber()
        } else if (action.type === 'SEND-MESSAGE') {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.messages.push({id: '6', message: body})
            this._callSubscriber()
        }
    }
}

export const addPostActionCreator = (postText: string) => ({
    type: 'ADD-POST',
    newPostText: postText,
} as const)
export const updateNewPostTextActionCreator = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
} as const)
export const SendMessageCreator = () => ({
    type: 'SEND-MESSAGE',
} as const)
export const updateNewMessageBodyCreator = (body: string) => ({
    type: 'UPDATE-NEW-MESSAGE-BODY',
    body: body,
} as const)


export default store;
