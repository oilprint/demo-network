import React from 'react';
import Dialogs from './Dialogs';
import {updateNewMessageTextActionCreator, addNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';


let mapStateToProps = (state)=> {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action)
    },
    sendMessage: () => {
      dispatch(addNewMessageTextActionCreator());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;