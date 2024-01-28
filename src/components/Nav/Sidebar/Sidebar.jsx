import s from './Sidebar.module.css';
import SidebarItem from './SidebarItem/SidebarItem';

function Sidebar(props) {
  let friendsElements = props.friends.map(item => <SidebarItem name={item.name} id={item.id} ava={item.ava} />)
  return(
    <div className={s.wrapper}>
      <div className={s.title}>
        Friends
      </div>
      
      <ul className={s.list}>
        { friendsElements }
      </ul>
   </div>

  )
}

export default Sidebar;