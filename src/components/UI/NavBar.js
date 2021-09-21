import './NavBar.css';

function NavBar() {
  return (
    <div className="nav-bar">
      <ul id="link-list">
        <li className="link"><a href="#about">About</a></li>
        <li className="link"><a href="#projects">Projects</a></li>
        <li className="link"><a href="https://example.com/">Home</a></li>
      </ul>
    </div>
  );
}

export default NavBar;
