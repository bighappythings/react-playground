import { useState } from "react";

import '../css/forms.css';
import '../css/components/calculator.css';

type Operator = '+' | '-' | '*' | '/';

const Calculator = () => {

    const [currentInput, setCurrentInput] = useState("");
    const [previousInput, setPreviousInput] = useState("");
    const [operator, setOperator] = useState<Operator | null>(null);

    const appendNumber = (number: string) => {
        if (number === "." && currentInput.includes(".")){
            return;
        }

        if (currentInput === "0" && number !== "."){
            setCurrentInput(number);
        } else if (number === "." && currentInput === ""){
            setCurrentInput("0.");
        } else {
            setCurrentInput((prev) => prev + number);
        }
    };

    const chooseOperator = (op: Operator) => {
        if (currentInput == "") return;

        if (previousInput !== ""){
            compute();
        }

        setOperator(op);
        setPreviousInput(currentInput);
        setCurrentInput("");
    };

    const compute = () => {
        const prev = parseFloat(previousInput);
        const current = parseFloat(currentInput);

        if (isNaN(prev) || isNaN(current)) return;

        let result = 0;

        switch (operator){
            case "+":
                result = prev + current;
                break;
            case "-":
                result = prev - current;
                break;
            case "*":
                result = prev * current;
                break;
            case "/":
                if (current === 0) return;
                result = prev / current;
                break;
            default:
                return;    
        }

        setCurrentInput(result.toString());
        setPreviousInput("");
        setOperator(null);
    };

    const clear = () => {
        setCurrentInput("");
        setPreviousInput("");
        setOperator(null);
    };

    return (
        <div className="main calculator">
            <h1 className="h1">TypeScript Calculator</h1>

            <label htmlFor="display" className="container_form_label">Result</label>
            <input type="text" value={currentInput} id="display" className="container_form_input" readOnly />

            <div id="buttons">
                <div className="button-group">
                    <button onClick={() => appendNumber("1")} className="number btn">1</button>
                    <button onClick={() => appendNumber("2")} className="number btn">2</button>
                    <button onClick={() => appendNumber("3")} className="number btn">3</button>
                    <button onClick={() => chooseOperator("+")} className="operator btn btn-success">+</button>
                </div>
               
                <div className="button-group">
                    <button onClick={() => appendNumber("4")} className="number btn">4</button>
                    <button onClick={() => appendNumber("5")} className="number btn">5</button>
                    <button onClick={() => appendNumber("6")} className="number btn">6</button>
                    <button onClick={() => chooseOperator("-")} className="operator btn btn-danger">-</button>
                </div>
                
                <div className="button-group">
                    <button onClick={() => appendNumber("7")} className="number btn">7</button>
                    <button onClick={() => appendNumber("8")} className="number btn">8</button>
                    <button onClick={() => appendNumber("9")} className="number btn">9</button>
                    <button onClick={() => chooseOperator("*")} className="operator btn btn-info">*</button>
                </div>
              
                <div className="button-group">
                    <button onClick={() => appendNumber("0")} className="number btn">0</button>
                    <button onClick={() => appendNumber(".")} className="number btn">.</button>
                    <button onClick={clear} className="clear btn btn-danger">C</button>
                    <button onClick={() => chooseOperator("/")} className="operator btn btn-warning">/</button>
                </div>
                
                <button onClick={compute} className="equals btn">=</button>
            </div>
        </div>
    );
};

export default Calculator;