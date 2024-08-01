import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { readData } from "../config/firebase";
import { ProductosPorCategoria } from "../types/interface";

interface CategoriasContextProps {
  categorias: ProductosPorCategoria | null;
  loading: boolean;
  error: Error | null;
}

interface CategoriasProviderProps {
  children: ReactNode;
}

const CategoriasContext = createContext<CategoriasContextProps | undefined>(
  undefined
);

export const CategoriasProvider = ({ children }: CategoriasProviderProps) => {
  const [categorias, setCategorias] = useState<ProductosPorCategoria | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log("fetchCategorias");
    const fetchCategorias = async () => {
      try {
        const data = (await readData("/")) as ProductosPorCategoria;
        setCategorias(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias, loading, error }}>
      {children}
    </CategoriasContext.Provider>
  );
};

export const useCategorias = () => {
  const context = useContext(CategoriasContext);
  if (context === undefined) {
    throw new Error("useCategorias must be used within a CategoriasProvider");
  }
  return context;
};
