import { useState } from "react";
import { Navbar } from "./components/layout/navbar/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";

// name ---> pepe
//name ---> juan

const [name, setName] = useState("pepe");
const cambiarNombre = () => {
  setName("juan");
};
function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      <Footer />

      <button onclick={cambiarNombre}>Cambiar nombre</button>
    </div>
  );
}

export default App;
