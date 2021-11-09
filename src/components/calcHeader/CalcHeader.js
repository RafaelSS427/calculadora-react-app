import { useContext } from 'react'
import CalcContext from '../../context/CalcContext'

import './calcHeader.css'

const CalcHeader = () => {

    const { state } = useContext(CalcContext)

    const { startDato, endDato, message, operacion } = state

    const existeOperacion = !!operacion 

    return(
        <div className="calcHeader-contenedor">

            { (startDato === '' && message === '') && <h1>0</h1> }
           
            {
                (!!message) ?
                <h3>{ message }</h3> : 
                <h1>{existeOperacion ? `${startDato }${operacion}${ endDato }` : startDato}</h1>
            }
        </div>
    )
}

export default CalcHeader