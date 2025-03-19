import "./card.css"

function Card ({titulo, descripcion, creada, completada}) {
    return (
        <>
            <div className="card row">
                <div className="card-header bg-primary text-white">
                    <h5 className="card-title">{titulo}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text">Fecha de creación: {creada}</p>
                </div>
                <div className="card-footer d-flex">
                    <button className="btn btn-success">Completar</button>
                    <button className="btn btn-warning">Editar</button>
                    <button className="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </>
    )
}


export default Card;