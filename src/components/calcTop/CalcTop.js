import { useContext } from 'react'
import CalcContext from '../../context/CalcContext'

import './calcTop.css'

const CalcTop = () => {

    const { setShowHistory } = useContext(CalcContext)

    const handleHistoy = () => {
        setShowHistory()
    }


    const handleDelete = () => {
        console.log('delete');
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