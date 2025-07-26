import { BrowserRouter } from "react-router-dom";
import Navigation from "./features/navigation/Navigation";
import AppRoutes from "./core/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <main className="p-4 pt-20">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;
