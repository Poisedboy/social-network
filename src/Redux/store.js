import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
 
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message:"Hey, let texting!", likesCount: 12},
                {id: 2, message:"How are u?", likesCount: 54},
                {id: 3, message:"What is your name?", likesCount: 765},
                {id: 4, message:"HI!", likesCount: 34},
                {id: 5, message:"blabla", likesCount: 76},    
                {id: 6, message:"dadadaadada", likesCount: 5},
                {id: 7, message:"What?", likesCount: 65}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Victor'},
                {id: 5, name: 'Lena'}       
            ],
            message: [
                {id: 1, message:"Hi!"},
                {id: 2, message:"How are u?"},
                {id: 3, message:"YO"},
                {id: 4, message:"Hi!"},
                {id: 4, message:"Hi!"}
            ],
            newMessageBody: ''
        },
        sidebar: { }
    },

    _callSubscriber () {
        console.log('State is changed');
    },

    getState () {
        return this._state;
    },

    subscribe (observer) {
        this._callSubscriber = observer; //патерн наблюдатель
    },

    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
};

window.state = store;

export default store;
