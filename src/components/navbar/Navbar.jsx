import { CartWidget } from "../pages/cart/CartWidget";
export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            CLOTHESBrand
          </a>
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
                <a class="nav-link active" aria-current="page" href="#">
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
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Remeras
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Buzos
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Jeans
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Botas
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
