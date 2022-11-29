import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // --> Librería para hacer calculos matemáticos.

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
];
export const operations = ['+', '-', '*', '/'];
export const equalSign = '=';

export const Calculator = () => {
    const [value, setValue] = useState('');

    const createHandleClick = (op) => {
        setValue(value + op);
    };

    return (
        <section>
            <h1>Calculator</h1>
            <input value={value} readOnly />
            <div role='grid'>
                {rows.map((row, index) => (
                    <div key={index} role='row'>
                        {row.map(number => <button onClick={() => createHandleClick(number)} key={number}>{number}</button>)}
                    </div>
                ))}
            </div>
            {operations.map(operation => (
                <button onClick={() => createHandleClick(operation)} key={operations}>{operation}</button>
            ))}
            <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
        </section>
    );
};