import { useReducer } from 'react'
import { types } from '../types/types'
import CalcContext from './CalcContext'
import { calcReducer } from './calcReducer'

const init = () => ({
    startDato: '',
    endDato: '',
    resultado: 0,
    operacion: null, // + , - , * ...
})


//Este componente tendrá toda la data de la app
const CalcState = ({ children }) => {
    const [ state, dispatch ] = useReducer(calcReducer, {}, init)

    const resetearValores = () => {
        const initialState = init()

        dispatch({
            type: types.calcResetValores,
            payload: initialState
        })
    }

    const addNumberStartDato = (number) => {
        dispatch({
            type: types.calcAddNumStartDato,
            payload: number
        })
    }

    const addNumberEndDato = (number) => {
        dispatch({
            type: types.calcAddNumEndDato,
            payload: number
        })
    }

    const setResultOperacion = (result) => {
        dispatch({
            type: types.calcSetResultOperacion,
            payload: result
        })
    }

    const setOperacion = (operacion) => {
        dispatch({
            type: types.calcSetOperacion,
            payload: operacion
        })
    }

    return(
        <CalcContext.Provider value={{
            state,
            resetearValores,
            addNumberStartDato,
            addNumberEndDato,
            setResultOperacion,
            setOperacion
        }}>
            { children }
        </CalcContext.Provider>
    )
}

export default CalcState