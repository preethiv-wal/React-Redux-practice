import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';

const NewCakeContainer = () => {
    const [number, setNumber] = useState(1);
    const numOfCakes = useSelector((state) => state.cake.numOfCakes);
    const dispatch =  useDispatch();
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes} </h2>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick = {() => dispatch(buyCake(number))}>Buy {number} cakes</button>
        </div>
    )
}
export default NewCakeContainer;
