import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Index />} />
        {/* Añade rutas adicionales si es necesario */}
      </Route>
    </Routes>
  );
}

export default App;
