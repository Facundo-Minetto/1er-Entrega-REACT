import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            CLOTHESBrand
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Productos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Guia de talles
                </a>
              </li>
            </ul>
            <CartWidget />
          </div>
          <div className="containerCategories">
            <ul className="categories">
              <Link to="/">Todas</Link>
              <Link to="/category/remeras">Remeras</Link>
              <Link to="/category/buzos">Buzos</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
