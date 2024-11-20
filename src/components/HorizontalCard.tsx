import { transformarADinero } from "../helpers/trasnformarADinero";
import { Producto } from "../types/interface";

interface Props {
  producto: Producto;
  onShowModal: (producto: Producto) => void;
}

const HorizontalCard = ({ producto, onShowModal }: Props) => {
  return (
    <>
      <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0 flex-nowrap">
          <div className="col-4 col-sm-4 col-md-4">
            <img
              src={
                producto.urlImagen
                  ? producto.urlImagen
                  : "images/logo_blanco.png"
              }
              className="img-fluid rounded-start"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "images/logo_blanco.png";
              }}
            />
          </div>
          <div
            className="col-8 col-sm-8 col-md-8"
            style={{ backgroundColor: "black" }}
          >
            <div className="card-body">
              <h6 className="card-title" style={{ color: "pink" }}>
                {producto.nombre}
              </h6>
              <div className="d-flex align-items-center gap-2 mt-2">
                <p className="card-text fw-bold" style={{ color: "white" }}>
                  {transformarADinero(producto.valor)}
                </p>

                <button
                  type="button"
                  className="btn btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  style={{ background: "red", color: "white" }}
                  onClick={() => onShowModal(producto)}
                >
                  Ver Más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HorizontalCard;
