import React from 'react';
import s from './Dialogs.module.css';
import DialogMessage from './DialogMessage/DialogMessage';
import DialogItem from './DialogItem/DialogItem';
// import {addNewMessageTextActionCreator} from '../../redux/profile-reducer';



function Dialogs(props) {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key ={d.id} id={d.id}/>);
  let messagesElements =state.messages.map(m => <DialogMessage id={m.id} key ={m.id} message={m.message}/>);
  let newMessageText = state.newMessageText;

  let addNewMessage = () => {
    props.sendMessage();
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessageText(text);
  }

  return(
    <div className={s.inner}>
      <ul className={s.list}>
        { dialogsElements }
      </ul>
      <div  className={s.messageList}>
        <ul>
        { messagesElements }
        </ul>

        <div className={ s.newMessage }>
          <div>
            <textarea  value={ newMessageText } onChange={ onMessageChange } placeholder='What are you think' />
            </div>
          <button onClick={ addNewMessage }> add new message </button>
        </div>
      </div>
    
    </div>
  )
};

export default Dialogs;