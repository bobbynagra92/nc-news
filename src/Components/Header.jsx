import { Link } from 'react-router-dom';
import Menu from './Menu';
import { VscAccount } from 'react-icons/vsc';

const Header = () => {
  return (
    <header>
      <Link to="/">
      <h1>BBB News</h1>
      </Link>
      <h6>Bobby's Bulletin Board</h6>
      <VscAccount className='account_icon'/>
      <Menu className='menu-button' />
    </header>
  );
};

export default Header;
