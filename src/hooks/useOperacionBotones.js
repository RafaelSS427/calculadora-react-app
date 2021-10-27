import { useContext } from 'react'
import CalcContext from '../context/CalcContext'
import { tiposOperaciones } from '../helpers/tiposOperaciones'
import { useNumberSimb } from './useNumberSimb'

export const useOperacionBotones = (name) => {

    const { state, 
        resetearValores, 
        addNumberStartDato, 
        addNumberEndDato,
        setResultOperacion,
        setOperacion } = useContext(CalcContext)

    const { startDato, endDato, resultado, operacion } = state

    const [ simbolo, changeSimbolo ] = useNumberSimb()

    //Guarda los valores digitados en el primer valor
    const startDatoSave = () => {
        const datoSave = startDato === '' ? name : startDato + name 
        addNumberStartDato(datoSave)
    }

    const handleClickNumber = () => {

        if( operacion === null ){
            startDatoSave()
        } else {
            const datoSave = endDato === '' ? name : endDato + name
            addNumberEndDato(datoSave)
        }

        if(resultado !== null ) setResultOperacion(null)
    }

    //Agrega + o - al primer valor
    const startDatoValor = () => {
        if(!(!!startDato)) {
            startDatoSave()
        } else {
            setOperacion(name)
        }
    }

    const handleClickOperacion = () => {

        switch (name) {
            case 'c':
                resetearValores(null)
            break;

            case '+':
                startDatoValor()
            break;

            case '-':
                startDatoValor()
            break;

            case '*':
                setOperacion(name)
            break;

            case '/':
                setOperacion(name)
            break;

            case '%':
                setOperacion(name)
            break;

            case '+/-':
                changeSimbolo()
                const dato = `${simbolo}${startDato}`
                console.log(simbolo)
                console.log(dato)
                addNumberStartDato(dato)
            break

            case '=':
                const result = tiposOperaciones(operacion, parseInt(startDato), parseInt(endDato))
                setResultOperacion(result)
                resetearValores(result)
                console.log(state);
            break;
        
            default:
                break;
        }
    }

    return {
        handleClickNumber,
        handleClickOperacion
    }

}