import { useContext } from 'react'
import CalcContext from '../context/CalcContext'
import { tiposOperaciones } from '../helpers/tiposOperaciones'
import { setSimboloNumber } from '../helpers/setSimboloNumber'

export const useOperacionBotones = (name) => {

    const { state, 
        resetearValores, 
        addNumberStartDato,
        addNumberEndDato,
        setResultOperacion,
        setOperacion,
        setSimbolStartNumber,
        addValueHistorial,
        setMessage } = useContext(CalcContext)

    const { startDato, endDato, resultado, operacion, estadoSimb, message } = state

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
        if(message !== '') setMessage('')
    }

    const handleClickOperacion = () => {

        if(name === 'c'){
            return resetearValores(null)
        }

        //Si no existe un valor inicial
        if(!startDato) return

        switch (name) {

            case '+':
                setOperacion(name)
            break;

            case '-':
                setOperacion(name)
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
                if(!!startDato) {    
                    const value = estadoSimb ? '+' : '-'
                    setSimbolStartNumber(value + setSimboloNumber(startDato))
                }
            break

            case '.':
                if( operacion === null ){
                    if(!startDato.includes('.')){
                        const newDato = startDato + '.'
                        addNumberStartDato(newDato)
                    }
                } else {
                    if(!endDato.includes('.')){
                        const newDato = endDato + '.'
                        addNumberEndDato(newDato)
                    }
                }
            break;
            
            case 'x^y':
                setOperacion('^')
            break;

            case '=':
                if(startDato === '' || operacion === null || endDato === '') return

                const result = tiposOperaciones(operacion, parseFloat(startDato), parseFloat(endDato))

                if(result === Infinity || isNaN(result)){
                    resetearValores(null)
                    return setMessage('No se puede realizar la operación')
                }

                addValueHistorial({
                    num1: parseFloat(startDato),
                    num2: parseFloat(endDato),
                    operacion,
                    result
                })
                resetearValores(result)
                addNumberStartDato(result + '')
            break;
        
            default:
                console.log('No existe esta operacion');
            break;
        }
    }

    return {
        handleClickNumber,
        handleClickOperacion
    }

}