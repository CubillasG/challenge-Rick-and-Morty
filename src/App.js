import { Route, Routes } from "react-router-dom";
import BarraNavegacion from "./Componentes/BarraNavegacion";
import TarjetasPersonajes from "./Componentes/TarjetasPersonajes";
import Contactame from "./Page/Contactame";
import Home from "./Page/Home";
import NoEncontrada from "./Page/NoEncontrada";
import Personajes from "./Page/Personajes";

function App() {
  return (
    <>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <BarraNavegacion />
            </div>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="personajes" element={<Personajes />}></Route>
        <Route path="personajes/:id" element={<TarjetasPersonajes />}></Route>
        <Route path="contacto" element={<Contactame />}></Route>
        <Route path="*" element={<NoEncontrada />}></Route>
      </Routes>
    </>
  );
}

export default App;
