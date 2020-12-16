import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

export default function CakeHookCon() {
    const CakeCount = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Number of Cakes - ({ CakeCount })</h1>
            <button type='button' onClick={() => dispatch(buyCake())}>Buy Cake</button>
            <div className="d"></div>
        </div>
    )

}
