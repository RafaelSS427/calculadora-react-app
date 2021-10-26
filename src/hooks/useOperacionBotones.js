import { useContext } from 'react'
import CalcContext from '../context/CalcContext'

export const useOperacionBotones = (name) => {

    const { state, 
        resetearValores, 
        addNumberStartDato, 
        addNumberEndDato,
        setResultOperacion,
        setOperacion } = useContext(CalcContext)

    const { startDato, endDato, resultado, operacion } = state

    const handleClickNumber = () => {

        if( operacion === null ){
            const datoSave = startDato === '' ? name : startDato + name 
            addNumberStartDato(datoSave)
        } else {
            const datoSave = endDato === '' ? name : endDato + name
            addNumberEndDato(datoSave)
        }

        if(resultado !== 0 ) setResultOperacion(0)
    }

    const handleClickOperacion = () => {

        switch (name) {
            case 'c':
                resetearValores(0)
            break;

            case '+':
                setOperacion(name)
            break;

            case '-':
                console.log(state);
            break;

            case '=':
                const result = parseInt(startDato) + parseInt(endDato)

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