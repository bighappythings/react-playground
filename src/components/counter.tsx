import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prev => prev + 1);
    };

    const decrement = () => {
        setCount(prev => prev - 1);
    }

    const reset = () => {
        setCount(0);
    };

    return (
        <div className="counter">
            <h1 class="h1">Counter</h1>

            <div id="counter" className="counter">
                <p class="h2">{count}</p>
            </div>

            <div className="buttons">
                <button id="increment" className="btn btn-success" onClick={increment}>Increment</button>
                <button id="decrement" className="btn btn-danger" onClick={decrement}>Decrement</button>
                <button id="rest" className="btn btn-info" onClick={reset}>Reset</button>
            </div>  
        </div>
    );
};

export default Counter;