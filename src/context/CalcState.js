import { useReducer } from 'react'
import { types } from '../types/types'
import CalcContext from './CalcContext'
import { calcReducer } from './calcReducer'

const init = () => ({
    startDato: '',
    endDato: '',
    resultado: null,
    operacion: null, // + , - , * ...
})

//Este componente tendrá toda la data de la app
const CalcState = ({ children }) => {
    const [ state, dispatch ] = useReducer(calcReducer, {}, init)

    //resetea los valores del reducer
    const resetearValores = (result) => {
        const initialState = init()

        dispatch({
            type: types.calcResetValores,
            payload: {
                ...initialState,
                resultado: result
            }
        })
    }

    //Cambia el valor del startDato
    const addNumberStartDato = (number) => {
        dispatch({
            type: types.calcAddNumStartDato,
            payload: number
        })
    }

    //Cambia el valor del endDato
    const addNumberEndDato = (number) => {
        dispatch({
            type: types.calcAddNumEndDato,
            payload: number
        })
    }

    //Cambiar el valor del resultado 
    const setResultOperacion = (result) => {
        dispatch({
            type: types.calcSetResultOperacion,
            payload: result
        })
    }

    //Cambia la operacion a realizar
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