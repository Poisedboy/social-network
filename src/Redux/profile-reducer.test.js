const { default: profileReducer, addPostActionCreator } = require("./profile-reducer");

let state = {
    posts: [
        {id: 1, message:"Hey, let texting!", likesCount: 12},
        {id: 2, message:"How are u?", likesCount: 54},
        {id: 3, message:"Let talk about all", likesCount: 765},
        {id: 4, message:"HI!", likesCount: 34},
        {id: 5, message:"blabla", likesCount: 76},    
        {id: 6, message:"dadadaadada", likesCount: 5},
        {id: 7, message:"Hello)", likesCount: 65}
    ]
};

it('Length of post should be icremented', () => {
    // 1. Course Data
    let action = addPostActionCreator('IT-KAMASUTRA.COM');
    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expactation
    expect(newState.posts.length).toBe(8);
});
  
it('Message of post should be it-kamasutra.com', () => {
    // 1. Course Data
    let action = addPostActionCreator('IT-KAMASUTRA.COM');

    // 2. action
    let newState = profileReducer(state, action);
    
    // 3. expactation
    expect(newState.posts[7].message).toBe('IT-KAMASUTRA.COM');
});

