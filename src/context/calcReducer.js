import { types } from "../types/types"


// {
//     startDato: '',
//     endDato: '',
//     resultado: 0,
//     operacion: null, // + , - , * ...
//     estadoSimb: false
// }

export const calcReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case types.calcResetValores:
            return {
                ...state,
                ...payload,
                historial: state.historial
            }

        case types.calcResetHistorial:
            return {
                ...state,
                historial: []
            }

        case types.calcAddNumStartDato:
            return {
                ...state,
                startDato: payload
            }
        
        case types.calcAddNumEndDato:
            return {
                ...state,
                endDato: payload
            }

        case types.calcSetResultOperacion:
            return {
                ...state,
                resultado: payload
            }
        
        case types.calcSetOperacion: {
            return {
                ...state,
                operacion: payload
            }
        }
        
        case types.calcSetSimbolStartNumber:
            return {
                ...state,
                estadoSimb: !state.estadoSimb,
                startDato: payload
                // startDato: `${state.estadoSimb ? '-' : '+'}${payload}`
            }

        case types.calcSetShowHistory:
            return {
                ...state,
                showHistory: !state.showHistory
            }

        case types.calcAddValueHistorial:
            return {
                ...state,
                historial: [
                    ...state.historial,
                    payload
                ]
            }
        
            case types.calcSetMessage:
                return {
                    ...state,
                    message: payload
                }
        
        default:
            return state
    }
}