import s from './DialogMessage.module.css';

function DialogMessage(props) {
  return(
     <li className={s.messageItem}>{props.message}</li>
  );
};

export default DialogMessage;