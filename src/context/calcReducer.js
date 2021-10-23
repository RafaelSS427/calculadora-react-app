import { types } from "../types/types"


export const calcReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case types.calcResetValores:
            return {
                ...state,
                ...payload,
                resultado: state.resultado
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
        
        default:
            return state
    }
}