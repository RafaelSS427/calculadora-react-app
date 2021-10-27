
const suma = (num1, num2) => ( num1 + num2 )

const resta = (num1, num2) => ( num1 - num2 )

const multiplicacion = (num1, num2) => ( num1 * num2 )

const division = (num1, num2) => (num1 / num2)

const porcentaje = (num1, num2) => (num1 * parseFloat(`0.${num2}`))

export const tiposOperaciones = (operacion, startDato, endDato) => {
    
    switch (operacion) {
        case '+':
            return suma(startDato, endDato)
        case '-':
            return resta(startDato, endDato)
        case '*':
            return multiplicacion(startDato, endDato)

        case '/':
            return division(startDato, endDato)

        case '%':
            return porcentaje(startDato, endDato)

        default:
            return 'Error'
    }
}