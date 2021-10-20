import CalcFooter from '../calcFooter/CalcFooter'
import CalcHeader from '../calcHeader/CalcHeader'
import CalcTop from '../calcTop/CalcTop'
import './calcContenedor.css'

const CalcContenedor = () => {


    return (
        <div className="calcContenedor-contenedor">
            <CalcTop />
            
            <CalcHeader />

            <CalcFooter />
        </div>
    )
}

export default CalcContenedor