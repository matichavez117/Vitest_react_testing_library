import { describe, expect, it } from "vitest";
import { fizzbuzz } from './../src/fizzbuzz';

describe('fizzbuzz', () => {
    // Este test lo desactive porque es redundante, (los test se tienen que ir eliminando cuando dejan de ser utiles )
    // it('Es una funcion', () => {
    //     expect(typeof fizzbuzz).toBe('function');
    // });

    it('La variable que se pasa, es un numero?', () => {
        expect(() => fizzbuzz()).toThrow();
    });

    it('Devuelve un error especifico?', () => {
        expect(() => fizzbuzz()).toThrow('Error especifico');
    });

    it('Devuelve error si el numero es Nan', () => {
        expect(() => fizzbuzz(NaN)).toThrow('El numero es NaN');
    });

    it('Retorna 1 si el numero es 1', () => {
        expect(fizzbuzz(1)).toBe(1);
    });

    it('Retorna fizz, si el numero es multiplo de 3', () => {
        expect(fizzbuzz(6)).toBe('fizz');
    });

    it('Retorna buzz, si el numero es multiplo de 5', () => {
        expect(fizzbuzz(25)).toBe('buzz');
    });

    it('Retorna fizzbuzz si el numero es multiplo de 3 y 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });
});