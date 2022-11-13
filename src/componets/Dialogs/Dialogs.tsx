import React from 'react';
import s from './Dilogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from '../../redux/state';

type DialogsMessageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export const Dialogs = (props:DialogsMessageType) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = props.messages.map(m => <Message message={m.message}/>)


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