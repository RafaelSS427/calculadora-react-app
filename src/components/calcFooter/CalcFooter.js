// import CalcBoton from '../calcBoton/CalcBoton'
import { Fragment } from 'react'
import { tiposBotones } from '../../helpers/tiposBotones'

import './calcFooter.css'

const CalcFooter = () => {
    return(
        <div className="calcFooter-contenedor">
            {
                tiposBotones.map((fila, i) => {
                    return (
                        <Fragment key={i}>
                            {
                                fila.map(btn => (
                                    <button key={btn.name}>{ btn.name }</button>
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