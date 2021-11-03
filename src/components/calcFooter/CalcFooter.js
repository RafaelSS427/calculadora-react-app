import CalcBoton from '../calcBoton/CalcBoton'
import { Fragment, useContext } from 'react'
import { tiposBotones } from '../../helpers/tiposBotones'

import './calcFooter.css'
import CalcContext from '../../context/CalcContext'
import CalcHistory from './CalcHistory'

const CalcFooter = () => {

    const { state } = useContext(CalcContext)

    const { showHistory, historial } = state

    return(
        <div className="calcFooter-contenedor">

            {
                showHistory && <CalcHistory historial={historial}/>
            }

            {
                !showHistory &&
                tiposBotones.map((fila, i) => {
                    return (
                        <Fragment key={i}>
                            {
                                fila.map(btn => (
                                    <CalcBoton key={btn.name} {...btn}/>
                                ))
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}

export default CalcFooter