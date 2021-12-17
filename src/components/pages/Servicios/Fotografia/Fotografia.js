import IntemListContainer from '../../../ItemListContainer/ItemListContainer'
import PageTitles from "../../../PageTitles"
export default function Inicio() {
    return (
        <div>
            <PageTitles title="Fotografia" />
            <IntemListContainer categoryPage="Servicios" msg="Fotografia" />
        </div>
    )
}