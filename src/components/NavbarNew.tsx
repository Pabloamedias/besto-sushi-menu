import { NavLink } from "react-router-dom";
import "../assets/styles.css";
import Header from "./Header";
import { useDatosLocal } from "../context/DatosLocalContext";

const NavbarNew = () => {
  const { datosLocal, loading } = useDatosLocal();
  return (
    <div className="fixed-top">
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "var(--brand-pastel)" }}
      >
        <div className="container-fluid">
          <div className="container d-flex flex-column flex-lg-row align-items-center">
            <img
              className="img-fluid "
              src="images/logo-blanco.png"
              style={{ maxWidth: "150px" }}
              alt=""
            />
            <div className="navbar-nav d-flex flex-column flex-lg-row ms-lg-auto">
              <div className="row">
                <div className="col mx-1">
                  {loading ? (
                    <p>Cargando...</p>
                  ) : (
                    <NavLink
                      className="nav-link d-flex align-items-center"
                      to={datosLocal!.telefono}
                      target="_blank"
                      style={{ width: "130%" }}
                    >
                      <i className="fa-solid fa-phone m-1" />
                      Pide Aquí
                    </NavLink>
                  )}
                </div>
                <div className="col mx-1">
                  {loading ? (
                    <p>Cargando...</p>
                  ) : (
                    <NavLink
                      className="nav-link d-flex align-items-center"
                      to={datosLocal!.ubicacion}
                      target="_blank"
                    >
                      <i className="fa-solid fa-location-dot m-1" />
                      <span>Ubicación</span>
                    </NavLink>
                  )}
                </div>

                <div className="col mx-1">
                  {loading ? (
                    <p>Cargando...</p>
                  ) : (
                    <NavLink
                      className="nav-link d-flex align-items-center"
                      to={datosLocal!.rrss}
                      target="_blank"
                    >
                      <i className="fa-brands fa-instagram m-1" />
                      Instagram
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Header />
    </div>
  );
};

export default NavbarNew;
