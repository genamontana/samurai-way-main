import React from 'react';
import s from './Dilogs.module.css'

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Gena
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Svetlana
                </div>
                <div className={s.dialog}>
                    Aleksandr
                </div>
                <div className={s.dialog}>
                    Victor
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    )
}