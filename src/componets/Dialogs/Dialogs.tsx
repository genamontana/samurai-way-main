import React from 'react';
import s from './Dilogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export const Dialogs = () => {

    let dialogsData = [
        {id: '1', name: 'Gena',},
        {id: '2', name: 'Andrey',},
        {id: '3', name: 'Svetlana',},
        {id: '4', name: 'Victor',},
        {id: '5', name: 'Aleksandr',},
        {id: '6', name: 'Valera',},
    ]

    let messagesData = [
        {id: '1', message: 'Hi',},
        {id: '2', message: 'How is your it-incubator?',},
        {id: '3', message: 'Yo!',},
        {id: '4', message: 'Yo!',},
        {id: '5', message: 'Yo!',}
    ]



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
}