import { NavLink } from "react-router-dom";
import "../assets/styles.css";
import Header from "./Header";

const NavbarNew = () => {
  return (
    <div className="fixed-top">
      <nav
        className="navbar navbar-expand-lg"
        data-bs-theme="dark"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <div className="container d-flex flex-column flex-lg-row align-items-center">
            <img
              className="img-fluid "
              src="public/images/logo_negro_fix.png"
              style={{ maxWidth: "150px" }}
              alt=""
            />
            <div className="navbar-nav d-flex flex-column flex-lg-row ms-lg-auto">
              <div className="row">
                <div className="col mx-1">
                  <NavLink
                    className="nav-link d-flex align-items-center"
                    to="https://wa.me/56979970715"
                    target="_blank"
                    style={{ width: "130%" }}
                  >
                    <i className="fa-solid fa-phone m-1" />
                    Pide Aquí
                  </NavLink>
                </div>
                <div className="col mx-1">
                  <NavLink
                    className="nav-link d-flex align-items-center"
                    to="https://www.google.com/maps/place/Victoria+1078,+8360534+Santiago,+Regi%C3%B3n+Metropolitana/@-33.4638329,-70.6485233,21z/data=!4m6!3m5!1s0x9662c51458075c3b:0xfe6122239f22f254!8m2!3d-33.4637746!4d-70.6484291!16s%2Fg%2F11cshhlynk?entry=ttu"
                    target="_blank"
                  >
                    <i className="fa-solid fa-location-dot m-1" />
                    <span>Ubicación</span>
                  </NavLink>
                </div>

                <div className="col mx-1">
                  <NavLink
                    className="nav-link d-flex align-items-center"
                    to="https://www.instagram.com/sakurasushi_cl/"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram m-1" />
                    Instagram
                  </NavLink>
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
