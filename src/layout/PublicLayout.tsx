import { Outlet } from "react-router-dom";
import "../assets/styles.css";
import NavbarNew from "../components/NavbarNew";
import backgroundImage from "../../public/images/black_thread.png";

const PublicLayout = () => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        background: `url(${backgroundImage}) repeat`,
      }}
    >
      <NavbarNew />
      <div className="flex-fill " style={{ marginTop: "200px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
