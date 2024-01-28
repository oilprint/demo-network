const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';
let initialState = {
      dialogs: [
        { id: 1,
          name: 'Lena'
        },
        { id: 2,
          name: 'Iryna'
        },
        { id: 3,
          name: 'Vova'
        },
        { id: 4,
          name: 'Ivan'
        }
      ],
      messages: [
        {
          id: 1,
          message: 'Hi'
        },
        {
          id: 1,
          message: 'hello how are yoy'
        },
        {
          id: 1,
          message: 'see you later'
        },
        {
          id: 1,
          message: 'i read this book'
        },
      ],
      newMessageText: ''
    }


const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
       ...state,
        newMessageText: action.newText
      }
    
    case ADD_NEW_MESSAGE_TEXT: 
    let body = state.newMessageText;
      return {...state, 
        newMessageText: '',
        messages: [...state.messages, { id: 1, message: state.newMessageText }]
      };
    default:
      return state;
  }
};

export const updateNewMessageTextActionCreator = (text) => 
({ type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
  }
);

export const addNewMessageTextActionCreator = () => 
({
  type: ADD_NEW_MESSAGE_TEXT 
}
)

export default dialogsReducer;