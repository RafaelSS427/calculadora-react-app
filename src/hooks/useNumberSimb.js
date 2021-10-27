import { useState } from 'react'

export const useNumberSimb = () => {
    const [ estadoSimb, setEstadoSimp ] = useState(true)
    const [ simbolo, setSimbolo ] = useState('')

    const hadleChangeSimbolo = () => {
        setEstadoSimp(!estadoSimb)
        estadoSimb ? setSimbolo('-') : setSimbolo('+')
    }

    return [
        simbolo,
        hadleChangeSimbolo
    ]
} 