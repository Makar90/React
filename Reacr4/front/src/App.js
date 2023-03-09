import React from 'react';
import { useState } from 'react';


function App() {
    let operator1 = React.createRef();
    let operator2 = React.createRef();
    let operationOperator = React.createRef();
    let resault = React.createRef();

    function Calculate() {
        if (isNaN(operator1.current.value) || isNaN(operator2.current.value)) {
            console.log('error');
            return 'Error';
        }
        switch (operationOperator.current.value) {
            case '+': return +operator1.current.value + +operator2.current.value;
            case '-': return +operator1.current.value - +operator2.current.value;
            case '*': return +operator1.current.value * +operator2.current.value;
            case '/': return +operator1.current.value / +operator2.current.value;
            default: return "Error";
        }
    }

    function ShowResault() {
        resault.current.value = Calculate();
    }
    return (
        <div className="App">

            <input ref={operator1} type='text' defaultValue='оператор 1' />
            <select ref={operationOperator}>
                <option value='+'>+</option>
                <option value='-'>-</option>
                <option value='*'>*</option>
                <option value='/'>/</option>
            </select>
            <input ref={operator2} type='text' defaultValue='оператор 2' />
            <button onClick={ShowResault}>CALCULATE</button>
            <input ref={resault} type='text' defaultValue='результат' />

        </div>
    );
}

export default App;
