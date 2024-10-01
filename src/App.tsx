import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import Index from "./pages/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
}

export default App;
