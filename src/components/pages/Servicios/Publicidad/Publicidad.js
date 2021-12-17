import IntemListContainer from '../../../ItemListContainer/ItemListContainer'
import PageTitles from '../../../PageTitles'

export default function Inicio() {
    return (
        <div>
            <PageTitles title="Publicidad" />
            <IntemListContainer categoryPage="Servicios" msg="publicidad"/>
        </div>
    )
}
