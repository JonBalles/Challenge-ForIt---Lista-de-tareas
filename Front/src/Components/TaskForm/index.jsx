import { useState, useEffect } from "react";
import { crearTarea, editarTarea } from "./../../services/api.service";

const TaskForm = ({ task, actualizarLista }) => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (task) {
            setTitulo(task.titulo);
            setDescripcion(task.descripcion);
        } else {
            setTitulo("");
            setDescripcion("");
        }
    }, [task]);

    const handleSubmit = async () => {
        if (titulo.trim() === "" || descripcion.trim() === "") {
            alert("Los campos no pueden estar vacíos.");
            return;
        }
        if (descripcion.length > 160) {
            alert("La descripción no puede superar los 160 caracteres.");
            return;
        }

        const closeModal = () => {
            const modal = document.getElementById("taskForm");
            const bsModal = bootstrap.Modal.getInstance(modal);
            bsModal.hide();  
        };

        setLoading(true);
        try {
            if (task) {
                await editarTarea({ id: task.id, titulo, descripcion, completada: task.completada });
            } else {
                await crearTarea({ titulo, descripcion });
            }
        } catch (error) {
            console.error("Error al guardar la tarea:", error);
        } finally {
            setTimeout(() => {
                actualizarLista();
                setLoading(false);
                closeModal();
                setTitulo("");
                setDescripcion("");
            }, 2000);
        }
    };

    return (
        <div className="modal fade" id="taskForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{task ? "Editar Tarea" : "Agregar Tarea"}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <form className="container">
                            <div className="form-group">
                                <label htmlFor="titulo">Título</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="titulo"
                                    placeholder="Introduce el título"
                                    value={titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descripcion">Descripción</label>
                                <textarea
                                    className="form-control"
                                    id="descripcion"
                                    placeholder="Descripción de la tarea"
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                    maxLength={160}
                                />
                                <small className="text-muted">{descripcion.length}/160</small>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" className={`btn ${task ? "btn-warning" : "btn-primary"}`} disabled={loading} onClick={handleSubmit}>
                            {loading ? (
                                <>
                                Guardando...
                                <span className="spinner-border spinner-border-sm"></span> 
                                </>
                            )
                            : task ? "Editar" : "Agregar"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskForm;
