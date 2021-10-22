import { useContext } from 'react';
import CalcContext from '../../context/CalcContext';

import './calcBoton.css'


const CalcBoton = ({name, clase}) => {

    const { resetearValores } = useContext(CalcContext)

    const handleClick = () => {
        switch (name) {
            case 'c':
                console.log('Voy a eliminar');
            break;

            case '1':
                console.log('Voy agregar un uno');
            break;

            case '=':
                resetearValores()
            break;
        
            default:
                break;
        }
    }

    return(
        <button className={`btn ${clase}`} onClick={ handleClick }>{name}</button>
    )
}

export default CalcBoton