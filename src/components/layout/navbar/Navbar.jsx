import { CartWidget } from "../../common/cartWidget/CartWidget";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" href="#">
            CLOTHESBrand
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Productos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contacto
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Guia de talles
                </a>
              </li>
            </ul>
            <CartWidget />
          </div>
          <div class="categorias">
            <ul>
              <Link to="/" class="nav-item">
                <a class="nav-link" href="#">
                  Todas
                </a>
              </Link>
              <Link to="/category/remeras" class="nav-item">
                <a class="nav-link" href="#">
                  Remeras
                </a>
              </Link>
              <Link to="/category/buzos" class="nav-item">
                <a class="nav-link" href="#">
                  Buzos
                </a>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
