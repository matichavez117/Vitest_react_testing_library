import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";
import { Calculator, operations, numbers, equalSign } from '../src/Calculator';

describe('Calculator', () => {
    afterEach(cleanup); // --> Limpia despues de cada test para que no se renderice varias veces el componente. 

    it('should render', () => {
        render(<Calculator />);
    });

    // --> Busca un texto en el componente.
    it('should render title correctly', () => {
        render(<Calculator />)
        screen.getByText('Calculator');
    });

    // --> Busca los numeros en el componente.
    it('should render numbers', () => {
        render(<Calculator />);
        numbers.map((number) => {
            screen.getByText(number);
        })
    });

    // --> Busca un elemento con el rol "row", que tenga un largo de 4 elementos.
    it('should render 4 rows', () => {
        render(<Calculator />);
        const rows = screen.getAllByRole('row');
        expect(rows.length).toBe(4);
    });

    it('Should render operations', () => {
        render(<Calculator />);
        operations.map(operation => {
            screen.getByText(operation);
        });
    });

    it('Should render equal sign', () => {
        render(<Calculator />);
        screen.getByText('+');
    });

    // --> Busca un input de tipo textbox.
    it('should render an input', () => {
        render(<Calculator />);
        screen.getByRole('textbox');
    });

    // --> Comprueba si al dar click en el 1, se muestra en el textbox.
    it('should user input after clicking a number', () => {
        render(<Calculator />);

        const one = screen.getByText('1');
        fireEvent.click(one); // --> Para simular eventos es mejor usar la librería "userEvent react testing".

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('1');

    });

    // --> Comprueba si al dar click en un numero, se muestra en el textbox.
    it('should user input after clicking a number', () => {
        render(<Calculator />);

        const one = screen.getByText('1');
        fireEvent.click(one);

        const two = screen.getByText('2');
        fireEvent.click(two);

        const three = screen.getByText('3');
        fireEvent.click(three);

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('123');

    });

    // --> Genero eventos click sobre elementos y compruebo si se guardan en el textbox.
    it('should show user input afterl clicking numbers and operations', () => {
        render(<Calculator />);
        const one = screen.getByText('1');
        fireEvent.click(one);

        const plus = screen.getByText('+');
        fireEvent.click(plus);

        fireEvent.click(one);

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('1+1');
    });

    // --> Prueba si la calculadora funciona, al darle a 1+1 tiene que devolver 2.
    it('should calculate based on user input and show the calculation', () => {
        render(<Calculator />);
        const one = screen.getByText('1');
        fireEvent.click(one);

        const plus = screen.getByText('+');
        fireEvent.click(plus);

        fireEvent.click(one);

        const equal = screen.getByText(equalSign);
        fireEvent.click(equal);

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('2');
    });

    // --> Comprueba que puedas seguir calculando despues de recibir un resultado
    it('should can continue calculate after obtain a result',() => {
        render(<Calculator />);
        const one = screen.getByText('1');
        fireEvent.click(one);

        const plus = screen.getByText('+');
        fireEvent.click(plus);

        const two = screen.getByText('2');
        fireEvent.click(two);

        const equal = screen.getByText(equalSign);
        fireEvent.click(equal);

        fireEvent.click(plus);

        fireEvent.click(one);

        fireEvent.click(equal);

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('4');
    });
});