
const CalcHistory = ({ historial, resetHistorial }) => {

    const handleDelete = () => {
        resetHistorial()
    }

    return(
        <div className="calcHistory-contenedor">


            <div className="contenedor-btn-delete">
                <button
                    className="btn-delete"
                    onClick={ handleDelete }
                >
                    <i className="far fa-trash-alt"></i>
                </button>
            </div>

            {
                historial.length === 0 ? 
                    <h4> No existe ninguna operacion </h4> :
                    historial.map(({ num1, num2, operacion, result }, i) => (
                        <div className="calcHistory-item" key={ i }>
                            <h4 className="mb-6"> {`${num1} ${operacion} ${num2}`} </h4>
                            <h3 className="mb-6"> {result} </h3>
                            <hr className="mb-6" />
                        </div>
                    ))
            }

            
        </div>
    )
}

export default CalcHistory