import './calcBoton.css'


const CalcBoton = ({name, clase}) => {
    //Allan fernandez

    const handleClick = () => {
        switch (name) {
            case 'c':
                console.log('Voy a eliminar');
            break;

            case '1':
                console.log('Voy agregar un uno');
            break;
        
            default:
                break;
        }
    }

    return(
        <button className={`btn ${clase}`} onClick={ handleClick }>{name}</button>
    )
}

export default CalcBoton