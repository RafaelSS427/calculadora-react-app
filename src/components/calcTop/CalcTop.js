import { useContext } from 'react'
import CalcContext from '../../context/CalcContext'
import { eliminarUltimoValor } from '../../helpers/eliminarUltimoVal'

import './calcTop.css'

const CalcTop = () => {

    const { setShowHistory, state, addNumberStartDato, addNumberEndDato } = useContext(CalcContext)
    
    const { startDato, endDato, operacion } = state

    const handleHistoy = () => {
        setShowHistory()
    }


    const handleDelete = () => {

        if(operacion === null){ // primer numero
            if(startDato === '') return
            const newValue = eliminarUltimoValor( startDato )
            addNumberStartDato(newValue)

        } else { // segundo numero
            if(endDato === '') return
            const newValue = eliminarUltimoValor( endDato )
            addNumberEndDato(newValue)

        }
    }
    

    return(
        <div className="calcTop-contenedor">
            <button 
                className="btn-top"
                onClick={handleHistoy}
            >
                <i className="fas fa-history"></i>
            </button>


            <button 
                className="btn-top"
                onClick={handleDelete}
            >
                <i className="fas fa-backspace"></i>
            </button>
        </div>
    )
}

export default CalcTop