import { useReducer } from 'react'
import { types } from '../types/types'
import CalcContext from './CalcContext'
import { calcReducer } from './calcReducer'

const init = () => ({
    startDato: '',
    endDato: '',
    resultado: null,
    operacion: null, // + , - , * ...
    estadoSimb: false,
    showHistory: false,
    historial: [],
    message: ''
})

//Este componente tendrá toda la data de la app
const CalcState = ({ children }) => {
    const [ state, dispatch ] = useReducer(calcReducer, {}, init)

    //resetea los valores del reducer
    const resetearValores = (result) => {
        const initialState = init()

        //if(result !== null) delete initialState.historial
        const newData = { ...initialState, resultado: result }

        dispatch({
            type: types.calcResetValores,
            payload: newData
        })
    }

    //Resetea el historial
    const resetHistorial = () => {
        dispatch({
            type: types.calcResetHistorial
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

    //Cambia el simbolo del primer numero
    const setSimbolStartNumber = (numero) => {
        dispatch({
            type: types.calcSetSimbolStartNumber,
            payload: numero
        })
    }

    //Cambia el controlador para observar el historial
    const setShowHistory = () => {
        dispatch({
            type: types.calcSetShowHistory
        })
    }

    //Agrega un valor al historial
    const addValueHistorial = (value) => {
        dispatch({
            type: types.calcAddValueHistorial,
            payload: value
        })
    }

    //Cambia el mensaje por si ocurre un error
    const setMessage = ( msg ) => {
        dispatch({
            type: types.calcSetMessage,
            payload: msg
        })
    }

    return(
        <CalcContext.Provider value={{
            state,
            resetearValores,
            resetHistorial,
            addNumberStartDato,
            addNumberEndDato,
            setResultOperacion,
            setOperacion,
            setSimbolStartNumber,
            setShowHistory,
            addValueHistorial,
            setMessage
        }}>
            { children }
        </CalcContext.Provider>
    )
}

export default CalcState