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
        setSimbolStartNumber } = useContext(CalcContext)

    const { startDato, endDato, resultado, operacion, estadoSimb } = state

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
                if(!!startDato) {    
                    const value = estadoSimb ? '+' : '-'
                    setSimbolStartNumber(value + setSimboloNumber(startDato))
                }
            break

            case '=':
                const result = tiposOperaciones(operacion, parseInt(startDato), parseInt(endDato))
                setResultOperacion(result)
                resetearValores(result)
                console.log(state);
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