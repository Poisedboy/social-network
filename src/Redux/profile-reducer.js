import { usersAPI, profileAPI } from '../components/API/api.js';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts: [
        {id: 1, message:"Hey, let texting!", likesCount: 12},
        {id: 2, message:"How are u?", likesCount: 54},
        {id: 3, message:"Let talk about all", likesCount: 765},
        {id: 4, message:"HI!", likesCount: 34},
        {id: 5, message:"blabla", likesCount: 76},    
        {id: 6, message:"dadadaadada", likesCount: 5},
        {id: 7, message:"Hello)", likesCount: 65}
    ],
    profile: null,
    // status: '',
    // newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 8,
                message: action.newPostText,
                likesCount: 0
            };
            
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: { ...state.profile, photos: action.photos } };
        }
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export const setUsersProfile = (profile) => ({ type: SET_USER_PROFILE, profile }); 

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos })

export const getStatus = (userId) => async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};

export const getUsersProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
        dispatch(setUsersProfile(response.data));
} 

export const savePhoto = (file) => async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export default profileReducer;
