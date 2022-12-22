import React, {ChangeEvent} from 'react';
import s from './Dilogs.module.css'
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {    SendMessageCreator, StoreType,
    updateNewMessageBodyCreator
} from '../../redux/state';

type DialogsMessageType = {
    store: StoreType
}

export const Dialogs = (props: DialogsMessageType) => {

    let state = props.store.getState().dialogsPage
    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)
    let newMessageBody = state.newMessageBody
    const onSendMessageClick = () => {
        props.store.dispatch(SendMessageCreator())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
      let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange}
                                  placeholder="Enter your message"></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}