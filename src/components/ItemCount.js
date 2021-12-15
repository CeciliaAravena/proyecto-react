import React, { useState } from "react"
import { useCounter } from "../hooks/useCounter"


const ItemCount = ({ inicial }) => {
    const {counter, increment, decrement, reset } = useCounter(inicial)

    return (

         <div >
            <h1>{counter}</h1>
            <button onClick={() =>increment(2)}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>-</button>
         </div>
    )
}

export default ItemCount
