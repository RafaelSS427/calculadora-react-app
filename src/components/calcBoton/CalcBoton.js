import { checkNumber } from '../../helpers/checkNumber';
import { useOperacionBotones } from '../../hooks/useOperacionBotones';

import './calcBoton.css'


const CalcBoton = ({name, clase}) => {

    const { handleClickNumber, handleClickOperacion } = useOperacionBotones(name)

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