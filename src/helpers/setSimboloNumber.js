
//Elimina el simbolo del numero
export const setSimboloNumber = ( numero ) => { //+212 || -212
    const existSim = numero.includes('+') || numero.includes('-') 

    return existSim ? numero.substring(1) : numero
}