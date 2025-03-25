import { eliminarTarea } from "./../../services/api.service";
import "./card.css";

function Card ({id, titulo, descripcion, creada, completada, onComplete, onEdit, actualizarLista}) {
    
    const handleDelete = async () => {
        if (!window.confirm("¿Estás seguro de eliminar esta tarea?")) return;
        try {
            await eliminarTarea(id);
            actualizarLista();
        } catch (error) {
            console.error("Error eliminando la tarea:", error);
        }
    };

    return (
        <div className="card row">
            <div className="card-header bg-primary text-white">
                <h5 className="card-title">{titulo}</h5>
            </div>
            <div className="card-body">
                <p className="card-text">{descripcion}</p>
                <p className="card-text">Fecha de creación: {creada}</p>
            </div>
            <div className="card-footer d-flex justify-content-between align-items-center">
                {!completada ? (
                    <>
                        <button className="btn btn-success m-1" data-bs-toggle="modal" data-bs-target="#modalCheck" onClick={onComplete}>
                            <i className="bi bi-check2-square"></i>
                        </button> 
                        <button className="btn btn-warning m-1" data-bs-toggle="modal" data-bs-target="#taskForm" onClick={() => onEdit(id)}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                    </>
                ) : <small className="form-text text-muted">Tarea completada</small>}
                <button className="btn btn-danger m-1" onClick={handleDelete}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default Card;
