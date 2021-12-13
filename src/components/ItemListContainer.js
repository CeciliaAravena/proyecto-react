
import {useState, useEffect} from 'react'
import { getFetch } from "../helpers/getFech"
import ItemList from './ItemList'


function ItemListContainer( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    
    
    useEffect(() => {
            getFetch
            .then(resp => setProductos(resp)) 
            .catch(err => console.log(err))
            .finally(()=>setLoading(false))            
    },[])
  
    // [] => retorna otro array [<li>1</li>,....]
    
    return (
        <div>
            { greeting }
            { loading ? 
                <h2>Cargando...</h2> 
                :  
                <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer
