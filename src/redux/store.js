import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {
    profilePage: {
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
      newPostText: 'напиши что-нибудь',
    },
    dialogsPage: {
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
    },
    sideBar: {
      friends: [
        {
          id: 1,
          name: 'Iryna',
          ava: 'https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg'
        },
        {
          id: 2,
          name: 'Sveta',
          ava: 'https://img.freepik.com/premium-photo/elegant-leaf-logo_802059-2.jpg'
        },
        {
          id: 1,
          name: 'Vova',
          ava: 'https://1000logos.net/wp-content/uploads/2017/05/Pepsi-logo.png'
        }
      ]
    }
  },
  _callSubscriber(){
  console.log('state change');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;  