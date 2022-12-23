import {MessagesPageType} from './state';

export type ActionsTypesDialogs = TypeSendMessage | TypeUpdateMassage

export type TypeSendMessage = ReturnType<typeof SendMessageCreator>
export type TypeUpdateMassage = ReturnType<typeof updateNewMessageBodyCreator>

export const SendMessageCreator = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}
export const updateNewMessageBodyCreator = (body: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        body: body,
    } as const
}

const dialogsReducer = (state: MessagesPageType, action: ActionsTypesDialogs) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.body
            break;
        case 'SEND-MESSAGE':
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: '6', message: body})
            break;
    }
    return state
}


export default dialogsReducer;