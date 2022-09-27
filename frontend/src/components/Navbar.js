import "./Navbar.css";
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='item'>
        <div className='texts'>
          <div className='text'>Ecommerce App</div>
        </div>
      </div>
      <div className='item'>
        <ul className='list'>
          <Link to="/">
          <li className='listItem'>Home</li>
          </Link>
          <Link to="/admin/login">
          <li className='listItem'>Admin</li>
          </Link>
          <li className='listItem'>Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
