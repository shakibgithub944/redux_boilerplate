import React from 'react'
import { useSelector } from 'react-redux'

function Bloge() {
    const { count } = useSelector((state) => state.counter)
    return (
        <div>Bloge === {count}</div>
    )
}

export default Bloge