const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Lena'}       
    ],
    message: [
        {id: 1, message:"Hi!"},
        {id: 2, message:"How are u?"},
        {id: 3, message:"YO"},
        {id: 4, message:"Hi!"},
        {id: 5, message:"Hi!"}
    ],
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
                return {
                ...state,
                message: [...state.message, { id: 8, message: body }],
            };
        default: 
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({
    type: SEND_MESSAGE,
    newMessageBody
});

export default dialogsReducer;
