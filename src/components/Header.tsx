import { useState } from "react";
import { formatHelper } from "../helpers/formatName";
import { useCategorias } from "../context/CategoriasContext";

const Header = () => {
  function goCategoria(id: string) {
    const elemento = document.getElementById(id);
    if (elemento) {
      setSelectedCategoria(id);
      // Forzar un pequeño margen temporal
      elemento.style.scrollMarginTop = "1px";

      elemento.scrollIntoView({
        behavior: "smooth", // Desplazamiento suave
        block: "end", // Alinea al inicio
      });

      // Opcional: limpiar scrollMarginTop después
      setTimeout(() => {
        elemento.style.scrollMarginTop = "";
      }, 1000); // Ajusta el tiempo según la duración del desplazamiento
    }
  }

  const [selectedCategoria, setSelectedCategoria] = useState("");

  const { categorias, loading } = useCategorias();
  return (
    <div className="border-top" style={{ background: "var(--brand-blue)" }}>
      <div
        className="d-flex align-items-center overflow-hidden"
        style={{ width: "100%", position: "relative" }}
      >
        <div
          className="overflow-auto"
          style={{ whiteSpace: "nowrap", width: "100%" }}
        >
          <ul
            className="list-unstyled d-flex py-1"
            style={{ display: "flex", margin: 0 }}
          >
            {loading ? (
              <ul
                className="list-unstyled d-flex py-1"
                style={{ display: "flex", margin: 0 }}
              >
                <li className="m-1 mx-3 text-white">Cargando...</li>
                <li className="m-1 mx-3 text-white">Cargando...</li>
                <li className="m-1 mx-3 text-white">Cargando...</li>
              </ul>
            ) : (
              categorias!.map((categoria) => (
                <li className={`m-1 mx-3 `} key={categoria.nombre}>
                  <a
                    className={"text-decoration-none"}
                    onClick={() => goCategoria(formatHelper(categoria.nombre))}
                    style={{
                      color:
                        selectedCategoria === formatHelper(categoria.nombre)
                          ? "var(--brand-orange)"
                          : "var(--brand-pastel)",
                      cursor: "pointer",
                    }}
                  >
                    {categoria.nombre}
                  </a>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
