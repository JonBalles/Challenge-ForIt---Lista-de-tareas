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
                <div className="card-footer d-flex justify-content-between align-items-center">
                    {!completada ? <>
                        <button className="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#modalCheck"><i className="bi bi-check2-square"></i></button> 
                        <button className="btn btn-warning m-1" data-bs-toggle="modal" data-bs-target="#taskForm"><i className="bi bi-pencil-square"></i></button>
                    </> : <small className="form-text text-muted">Tarea completada</small> }
                    <button className="btn btn-danger m-1"><i className="bi bi-trash"></i></button>
                </div>
            </div>
        </>
    )
}


export default Card;