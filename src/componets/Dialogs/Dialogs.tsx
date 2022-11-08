import React from 'react';
import s from './Dilogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={'1'} name={'Gena'}/>
                <DialogItem id={'2'} name={'Andrey'}/>
                <DialogItem id={'3'} name={'Svetlana'}/>
                <DialogItem id={'4'} name={'Victor'}/>
                <DialogItem id={'5'} name={'Aleksandr'}/>
                <DialogItem id={'6'} name={'Valera'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your it-incubator?'}/>
                <Message message={'Yo!'}/>
                <Message message={'Yo!'}/>
                <Message message={'Yo!'}/>
            </div>
        </div>
    )
}