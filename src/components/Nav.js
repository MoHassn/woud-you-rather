import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav-container">
      <header>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add">New Question</Link>
          </li>
          <li>
            <Link to="/leaderboard">Leader Board</Link>
          </li>
          <li>
            <Link to="/login">Login </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Nav;
