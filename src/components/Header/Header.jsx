import headerStyle from './Header.module.css';

function Header() {
  return (
    <header className={headerStyle.header}>
      <img className={headerStyle.img} src='https://i.pinimg.com/originals/82/c6/5b/82c65b9bb0a75026fc4c82a438b4cc9b.jpg' />
     </header>
  );
}

export default Header;