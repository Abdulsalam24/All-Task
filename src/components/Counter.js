import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { byAmount, decrement, increment } from '../redux/Counter'

function Counter() {
    const dispatch = useDispatch()
    const { count } = useSelector((state) => state.count)
    
    return (
        <>
            <h1>Count : {count}</h1>
            <div className="flex gap-3 text-center justify-center">
                <button className='btn' onClick={() => dispatch(increment())}>Increment</button>
                <button className='btn' onClick={() => dispatch(decrement())}>Decrement</button>
                <button className='btn' onClick={() => dispatch(byAmount(20))}>Decrement</button>
            </div>
        </>
    )
}

export default Counter