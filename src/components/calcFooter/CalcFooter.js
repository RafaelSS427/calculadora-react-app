import CalcBoton from '../calcBoton/CalcBoton'
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