import { Outlet } from "react-router-dom";
import "../assets/styles.css";
import NavbarNew from "../components/NavbarNew";

const PublicLayout = () => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        background: `var(--brand-pastel)`,
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
