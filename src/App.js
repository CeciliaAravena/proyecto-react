import Content from "./components/Content";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./styles/styles.css";

function App() {
  return (
    <center>
     <NavBar/>
     <ItemListContainer greeting ="Hola soy ItemListContainer" />
     <Content/>
    </center>
  );
}

export default App;
