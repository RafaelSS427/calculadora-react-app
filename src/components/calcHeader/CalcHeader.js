import { useContext } from 'react'
import CalcContext from '../../context/CalcContext'

import './calcHeader.css'

const CalcHeader = () => {

    const { state } = useContext(CalcContext)

    const { startDato, endDato, resultado, operacion } = state

    console.log(state);

    const existeOperacion = !!operacion 

    return(
        <div className="calcHeader-contenedor">
            {
                (existeOperacion) && <small>{ startDato }{operacion}{ endDato }</small>
            }
            {
                (!existeOperacion) && <h1>{ startDato }</h1>
            }
            {
                (resultado !== null) && <h1>{ resultado }</h1>
            }
        </div>
    )
}

export default CalcHeader