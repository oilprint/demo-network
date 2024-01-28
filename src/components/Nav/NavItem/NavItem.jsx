import s from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const setActive = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "white" : "",
    };
  }

function NavItem(props) {
  return(
    <li className={s.item}>
      <NavLink className={s.link} to={props.links}
      style={setActive}>{props.title}</NavLink>
    </li>
  )
}

export default NavItem;