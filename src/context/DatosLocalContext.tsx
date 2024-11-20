import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { readData } from "../config/firebase";
import { DatosLocal } from "../types/interface";

interface DatosLocalContextProps {
  datosLocal: DatosLocal | null;
  loading: boolean;
  error: Error | null;
}

interface DatosLocalProviderProps {
  children: ReactNode;
}

const DatosLocalContext = createContext<DatosLocalContextProps | undefined>(
  undefined
);

export const DatosLocalProvider = ({ children }: DatosLocalProviderProps) => {
  const [datosLocal, setDatosLocal] = useState<DatosLocal | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log("fetchDatosLocal");
    const fetchDatosLocal = async () => {
      try {
        const data = await readData("/datos-local");
        setDatosLocal(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDatosLocal();
  }, []);

  return (
    <DatosLocalContext.Provider value={{ datosLocal, loading, error }}>
      {children}
    </DatosLocalContext.Provider>
  );
};

export const useDatosLocal = () => {
  const context = useContext(DatosLocalContext);
  if (context === undefined) {
    throw new Error("useDatosLocal must be used within a DatosLocalProvider");
  }
  return context;
};
