import './menu.css';

function Menu1() {
  return (
    <header class="site-header">
    <nav className="navbar navbar-expand navbar-dark bg-info">
    <div className="container-fluid">
    <a className="navbar-brand pb-2" href="#">Bootstrap 4</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav align-self-end" id="nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Item 4</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Item 5</a>
            </li>
            ...
            <li className="nav-item">
                <a className="nav-link" href="#">Item 13</a>
            </li>
            <li className="nav-item dropdown d-none">
                <a className="nav-link" href="#" id="navbarDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="navbar-toggler-icon"></span>
                </a>
                <ul className="dropdown-menu dropdown-menu-right bg-info" aria-labelledby="navbarDropdownMenu">
                </ul>
            </li>
        </ul>
    </div>
    </div>
</nav>
</header>
  );
}

export default Menu1;