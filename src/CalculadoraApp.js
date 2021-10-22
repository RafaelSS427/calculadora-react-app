import CalcContenedor from './components/calcContenedor'
import CalcState from './context/CalcState'

const CalculadoraApp = () => {

    return(
        <CalcState>
            <div className="calculadoraApp-contenedor">
                <CalcContenedor />
            </div>
        </CalcState>
    )

}

export default CalculadoraApp