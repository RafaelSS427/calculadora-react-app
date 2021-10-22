import { useReducer } from 'react'
import { types } from '../types/types'
import CalcContext from './CalcContext'
import { calcReducer } from './calcReducer'

const init = () => ({
    startDato: '',
    endDato: '',
    operacion: null, // + , - , * ...
    contador: 0
})


//Este componente tendrá toda la data de la app
const CalcState = ({ children }) => {
    const [ state, dispatch ] = useReducer(calcReducer, {}, init)

    const resetearValores = () => {
        const initialState = init()
        
        console.log(initialState)

        console.log('Intento resetear los valores');
        
        // dispatch({
        //     type: types.calcResetValores,
        //     payload: initialState
        // })
    }

    return(
        <CalcContext.Provider value={{
            state,
            resetearValores
        }}>
            { children }
        </CalcContext.Provider>
    )
}

export default CalcState