import {ActionsType, MessagesPageType} from './state';



const dialogsReducer = (state: MessagesPageType, action: ActionsType) => {
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