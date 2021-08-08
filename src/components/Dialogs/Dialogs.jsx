import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const ChatItem = (props) => {
  
  let path = '/chats/' + props.id;
  
  return (
    <div className={s.chats__item + ' ' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const Message = (props) => {
  return (
    <div className={s.message}>{props.msg}</div>
  )
}

const Dialogs = (props) => {
  
  
  
  return (
      <div className={s.chats}>
          <div className={s.chats__items}>
              <ChatItem name='Jack' id='1'/>
              <ChatItem name='Joh' id='2'/>
              <ChatItem name='Rose' id='3'/>
              <ChatItem name='Low' id='4'/>
          </div>
          <div className={s.messages}>
              <Message msg='Hi'/>
              <Message msg='Hello'/>
              <Message msg='Hell'/>
          </div>
      </div>
  )
}

export default Dialogs;