import { Navbar } from "./components/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola a todos!"} />
    </div>
  );
}

export default App;
