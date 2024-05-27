import React from 'react'
import './counter.css'
// To dispatch the action we import useDispatch.
// We also import increment and decrement functions from actions.
// We use useSelector for retriving the data.
import { useDispatch, useSelector } from 'react-redux'
import { Increment, Decrement } from '../Redux/counterAction.jsx'

export default function Counter() {
    const dispatch = useDispatch()
    // After importing the useSelector we assign it here.
    const counter = useSelector(state => state.counter)
    return(
    <div className='counter_app'>
        <h1>Counter Application</h1>
        <div className='counter'>
            <button className='increment' onClick={()=>dispatch(Increment())}>Increment</button> 
                <span>{counter}</span> 
            <button className='decrement' onClick={()=>dispatch(Decrement())}>Decrement</button>
        </div>
    </div>
    )
}

// When we are clicking these buttons we are dispatching an action.
// We will write code for that action.
// In this case we want the action to be: to increment and to decrement.

// We come here to dispatch the action.
// Like this we have dispatched our actions: onClick={()=>dispatch(Increment)}

