import { formatHelper } from "../helpers/formatName";
import productos from "../productos";
import ProductoCard from "./ProductoCard";

const Categoria = () => {
  return (
    <>
      {Object.keys(productos).map((categoria) => (
        <div id={categoria} key={categoria} className="m-3">
          <div
            className="m-2 mb-3 rounded"
            style={{
              backgroundColor: "black",
              display: "inline-flex",
            }}
          >
            <h1 className="m-1 p-2 fw-bold" style={{ color: "white" }}>
              {formatHelper(categoria)}
            </h1>
          </div>

          <div className="row row-cols-1 row-cols-md-3">
            {productos[categoria].map((producto, index) => (
              <div key={index} className="col mb-4">
                <ProductoCard producto={producto} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Categoria;
