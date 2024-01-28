import s from './Nav.module.css';
import NavItem from './NavItem/NavItem';
import Sidebar from './Sidebar/Sidebar';



function Nav() {
      return (
    <nav className={s.nav}>
      <ul>
        <NavItem title='Profile' links='/' />
        <NavItem title='Messages' links='/dialogs' />
        <NavItem title='News' links='4' />
        <NavItem title='Music' links='3' />
      </ul>
      {/* <Sidebar friends={store.state.friends} /> */}
     </nav>
  );
 
   
}




export default Nav;