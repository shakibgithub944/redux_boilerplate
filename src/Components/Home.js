import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByAmount, increment, incrementByAmount } from '../redux/Counter'

function Home() {
    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    return (
        <div className='w-full h-screen flex items-start justify-center'>
            <div className=' my-auto'>
                <h1 className="font-bold mx-auto border rounded-lg p-2 text-center">Counter = {count}</h1>

                <div className='flex items-center gap-3 mt-5'>
                    <button className='font-bold border rounded-lg p-2' onClick={() => dispatch(decrementByAmount(10))}>Decrement with payload</button>
                    <button className='font-bold border rounded-lg p-2' onClick={() => dispatch(decrement())}>Decrement</button>
                    <button className='font-bold border rounded-lg p-2' onClick={() => dispatch(increment())}>Increment</button>
                    <button className='font-bold border rounded-lg p-2' onClick={() => dispatch(incrementByAmount(10))}>Increment with payload</button>
                </div>
                    <a href='/blog' className='font-bold border rounded-lg p-2'>Blog</a>
            </div>
        </div>
    )
}

export default Home