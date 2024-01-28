import s from './SidebarItem.module.css';

function SidebarItem(props) {
  return (

    <li className={s.wrapper}>
      <img className={s.avatar} src={props.ava} alt=""/>
      <div className={s.name}>
        {props.name}
      </div>
    </li>
  );
};

export default SidebarItem;