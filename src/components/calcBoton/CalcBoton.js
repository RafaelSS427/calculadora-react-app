import { useContext } from 'react';
import CalcContext from '../../context/CalcContext';
import { checkNumber } from '../../helpers/checkNumber';

import './calcBoton.css'


const CalcBoton = ({name, clase}) => {

    const { state, 
            resetearValores, 
            addNumberStartDato, 
            addNumberEndDato,
            setResultOperacion,
            setOperacion } = useContext(CalcContext)

    const { startDato, endDato, resultado, operacion } = state

    const handleClickNumber = () => {
        const datoSave = startDato === '' ? name : startDato + name 

        if( operacion === null ){
            addNumberStartDato(datoSave)
        } else {
            addNumberEndDato(datoSave)
        }
    }

    const handleClickOperacion = () => {

        switch (name) {
            case 'c':
                resetearValores()
            break;

            case '+':
                setOperacion(name)
            break;

            case '-':
                console.log(state);
            break;

            case '=':
                console.log({'one': parseInt(startDato), 'two': parseInt(endDato)});
                const result = parseInt(startDato) + parseInt(endDato)

                console.log(result);

                // TODO: realizar calculo
                if(resultado === 0) {
                    setResultOperacion(result)
                    resetearValores()
                }
            break;
        
            default:
                break;
        }
    }

    return(
        <button 
            className={`btn ${clase}`} 
            onClick={ checkNumber(name) ? handleClickNumber : handleClickOperacion }
        >
            {name}
        </button>
    )
}

export default CalcBoton