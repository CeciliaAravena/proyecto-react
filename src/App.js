import Content from "./components/Content";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./styles/styles.css";

function App() {
  const inicial = 1
  const max = 10



  return (
    <center>
     <NavBar/>
     <ItemListContainer greeting ="Hola soy ItemListContainer" />
     <Content/>
     <div clasName= 'hooks-app'>
       <ItemCount inicial={inicial} max={max} />
     </div>

    </center>
  );
}

export default App;
