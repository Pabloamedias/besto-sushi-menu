import { DataProducto } from "../types/interface";
import { transformarADinero } from "../helpers/trasnformarADinero";

interface Props {
  producto: DataProducto;
}

const ProductoCard = ({ producto }: Props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={producto.url_image ? producto.url_image : "images/logo_blanco.png"}
        className="card-img-top"
      />
      <div className="card-body" style={{ backgroundColor: "black" }}>
        <h5 className="card-title" style={{ color: "pink" }}>
          {producto.nombre}
        </h5>
        <p className="card-text fw-bold" style={{ color: "white" }}>
          {transformarADinero(producto.precioNormal)}
        </p>
        <ul>
          {producto.descripcion?.map((descripcion, index) => (
            <li
              key={index}
              className="list-unstyled fst-italic"
              style={{ color: "white" }}
            >
              {descripcion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductoCard;
