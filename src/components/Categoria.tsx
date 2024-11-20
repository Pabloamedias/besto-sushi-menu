import { useState } from "react";
import HorizontalCard from "./HorizontalCard";
import { useCategorias } from "../context/CategoriasContext";
import { Producto } from "../types/interface";
import { transformarADinero } from "../helpers/trasnformarADinero";
import { Modal } from "react-bootstrap";
import { formatHelper } from "../helpers/formatName";

const Categoria = () => {
  const { categorias, loading } = useCategorias();
  const [selectedProducto, setSelectedProducto] = useState<Producto | null>(
    null
  );
  const [show, setShow] = useState(false);

  const handleShowModal = (producto: Producto) => {
    setSelectedProducto(producto);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      {loading ? (
        <h1 className="text-white">Cargando Menú...</h1>
      ) : (
        categorias!.map((categoria) => (
          <div
            id={formatHelper(categoria.nombre)}
            key={categoria.id}
            className="m-3"
          >
            <div
              className="m-2 mb-3 rounded"
              style={{
                backgroundColor: "black",
                display: "inline-flex",
              }}
            >
              <h1 className="m-1 p-2 fw-bold" style={{ color: "white" }}>
                {categoria.nombre}
              </h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3">
              {loading ? (
                <h1>Cargando</h1>
              ) : (
                categoria.productos.map((producto, index) =>
                  producto.disponible ? (
                    <div key={index} className="col mb-4">
                      <HorizontalCard
                        producto={producto}
                        onShowModal={handleShowModal}
                      />
                    </div>
                  ) : (
                    ""
                  )
                )
              )}
            </div>
          </div>
        ))
      )}

      {selectedProducto && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton style={{ background: "black" }}>
            <Modal.Title style={{ color: "pink" }}>
              {selectedProducto.nombre}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ background: "black", color: "white" }}>
            <p>{selectedProducto.descripcion}</p>
            <p className="fw-bold">
              {transformarADinero(selectedProducto.valor)}
            </p>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Categoria;
