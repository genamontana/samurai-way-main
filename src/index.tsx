import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostType = {
    id: string
    message: string
    likesCount: number
}

let posts: PostType[] = [
    {id: '1', message: 'Hi, how are you?', likesCount: 12,},
    {id: '2', message: 'It\'s my first post', likesCount: 11,},
    {id: '3', message: 'Hello', likesCount: 11,},
    {id: '4', message: 'Yes', likesCount: 11,},
]

export type DialogsType = {
    id: string
    name: string
}

let dialogs: DialogsType[] = [
    {id: '1', name: 'Gena',},
    {id: '2', name: 'Andrey',},
    {id: '3', name: 'Svetlana',},
    {id: '4', name: 'Victor',},
    {id: '5', name: 'Aleksandr',},
    {id: '6', name: 'Valera',},
]

export type MessagesType = {
    id: string
    message: string
}

let messages: MessagesType[] = [
    {id: '1', message: 'Hi',},
    {id: '2', message: 'How is your it-incubator?',},
    {id: '3', message: 'Yo!',},
    {id: '4', message: 'Yo!',},
    {id: '5', message: 'Yo!',}
]


ReactDOM.render(<App posts={posts} messages={messages} dialogs={dialogs}/>, document.getElementById('root'));
