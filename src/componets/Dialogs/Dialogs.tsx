import React from 'react';
import s from './Dilogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';


export const Dialogs = () => {

    let dialogs = [
        {id: '1', name: 'Gena',},
        {id: '2', name: 'Andrey',},
        {id: '3', name: 'Svetlana',},
        {id: '4', name: 'Victor',},
        {id: '5', name: 'Aleksandr',},
        {id: '6', name: 'Valera',},
    ]

    let messages = [
        {id: '1', message: 'Hi',},
        {id: '2', message: 'How is your it-incubator?',},
        {id: '3', message: 'Yo!',},
        {id: '4', message: 'Yo!',},
        {id: '5', message: 'Yo!',}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}