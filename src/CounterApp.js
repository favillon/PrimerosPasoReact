// Funtional components
import { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({value}) => {
    
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    const handleReset = () => {
        setCounter(value);
    }
    const handleSubract = () => {
        setCounter(counter - 1);
    }
    
    return (
        <>
            <h1>CounterApp</h1>
            <p>{ counter }</p>
            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handleReset }> Reset </button>
            <button onClick={ handleSubract }> -1 </button>
        </>
    );
}

CounterApp.propType = {
    saludo : PropTypes.number
}
export default CounterApp;