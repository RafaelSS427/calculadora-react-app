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
                ...payload
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
        
        default:
            return state
    }
}