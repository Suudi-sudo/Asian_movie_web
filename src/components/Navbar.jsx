import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/popular">Popular</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
        <li>
          <Link to="/all_drama">All Drama</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;