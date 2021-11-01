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

    const handleClickOperacion = () => {

        if(name === 'c'){
            resetearValores(null)
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

            case '=':
                const result = tiposOperaciones(operacion, parseFloat(startDato), parseFloat(endDato))
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