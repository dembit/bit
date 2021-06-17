import { MiddlewareAPI } from 'redux';
import { TypeSocket } from 'typesocket';

import { ActionType, MessageModel } from './Types/Tipes'; // Your enum with action types.


export const socketMiddleware = (url: string) => {
    return (store: MiddlewareAPI<any, any>) => {
        const socket = new TypeSocket<MessageModel>(url);
        
        // We dispatch the actions for further handling here:
        socket.on('connected', () => store.dispatch({ type: ActionType.WS_CONNECTED }));
        socket.on('disconnected', () => store.dispatch({ type: ActionType.WS_DISCONNECTED }));
        socket.on('message', (message) => store.dispatch({ type: ActionType.WS_MESSAGE, value: message }));
        socket.connect();

        return (next: (action: any) => void) => (action: any) => {
            // We're acting on an action with type of WS_SEND_MESSAGE.
            // Don't forget to check if the socket is in readyState == 1.
            // Other readyStates may result in an exception being thrown.
            if (action.type && action.type === ActionType.WS_SEND_MESSAGE && socket.readyState === 1) {
                socket.send(action.value);
            }

            return next(action);
        };
    };
};