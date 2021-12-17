import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/esm/Container'

export default function ItemCount({initial, stock}) {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if (count < stock){
            setCount(count+1)
        }
    }

    const restar = () => {
        if (count > initial){
            setCount(count-1)
        }
    }

    const addToCart = () => {
        if(count > 0){
            console.log(`A seleccionado ${count} productos`)
        }
    }

    return (
        <Container>
            <Button variant="outline-dark" onClick={restar}>-</Button>{' '}
            {count}{' '}
            <Button variant="outline-dark" onClick={sumar}>+</Button>{' '}
            <Button variant="outline-dark" onClick={addToCart}>Agregar al carrito</Button>
        </Container>
    )
}
