import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { readData } from "../config/firebase";
import { Categoria } from "../types/interface";

interface CategoriasContextProps {
  categorias: Categoria[] | null;
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
  const [categorias, setCategorias] = useState<Categoria[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log("fetchCategorias");
    const fetchCategorias = async () => {
      try {
        const data = await readData("/categorias");
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
