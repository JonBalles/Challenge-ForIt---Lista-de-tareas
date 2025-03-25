import { useState } from "react";
import { editarTarea } from "./../../services/api.service";

const ModalCheck = ({ task, actualizarLista }) => {
    const [loading, setLoading] = useState(false);

    const closeModal = () => {
        const modal = document.getElementById("modalCheck");
        const bsModal = bootstrap.Modal.getInstance(modal);
        bsModal.hide();  
    };

    const handleCompleteTask = async () => {
        if (!task) return;
        setLoading(true);
        try {
            await editarTarea({ ...task, completada: true });
        } catch (error) {
            console.error("Hubo un error:", error);
        } finally {
            setTimeout(() => {
                actualizarLista();
                setLoading(false)
                closeModal();
            }, 2000);
        }
    };

    return (
        <div className="modal fade" id="modalCheck" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Completar tarea</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        Desea completar la tarea: <strong>{task?.titulo}</strong>?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary" disabled={loading} onClick={handleCompleteTask}>
                            {loading ? (
                                <>
                                    Completando... 
                                    <span className="spinner-border spinner-border-sm"></span> 
                                </>
                            ) : "Completar"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCheck;
