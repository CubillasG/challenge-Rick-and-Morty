import { Route, Routes } from "react-router-dom";
import BarraNavegacion from "./Componentes/BarraNavegacion";
import TarjetasPersonajes from "./Componentes/TarjetasPersonajes";
import Contactame from "./Page/Contactame";
import Home from "./Page/Home";
import NoEncontrada from "./Page/NoEncontrada";
import Personajes from "./Page/Personajes";
import "./App.css";
import PaginaPrincipal from "./Componentes/PaginaPrincipal";
import RedesSociales from "./Componentes/RedesSociales";

function App() {
  return (
    <>
      <div className="container">
        <div className="col-12">
          <BarraNavegacion />

          <main>
            <PaginaPrincipal />
          </main>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="personajes" element={<Personajes />}></Route>
            <Route
              path="personajes/:id"
              element={<TarjetasPersonajes />}
            ></Route>
            <Route path="contacto" element={<Contactame />}></Route>
            <Route path="*" element={<NoEncontrada />}></Route>
          </Routes>
          <footer>
            <RedesSociales />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
