const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
      posts: [
        {
          id: 1,
          message: "Hi, how are you?",
          countLikes: '15'
        },
        {
          id: 2,
          message: "I am here",
          countLikes: '25'
        },
        {
          id: 3,
          message: "I've done this",
          countLikes: '152'
        }
      ],
      newPostText: 'v state',
    };

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        countLikes: 0
      }; 
      return {...state, newPostText: '', posts: [...state.posts, newPost ]}   
   
    case UPDATE_NEW_POST_TEXT:
     return {...state, newPostText: action.newText}
      
    default:
      return state;
  }
}


export const addPostActionCreator = () => ({
    type: ADD_POST
  }) 


export const updateNewPostActionCreator = (text) => {
  return ({
    type: UPDATE_NEW_POST_TEXT,
    newText:  text
  }
)
} 

export default profileReducer;