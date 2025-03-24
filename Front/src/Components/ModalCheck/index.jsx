import { useState, useEffect } from "react"
import { editarTarea } from "./../../services/api.service";

const ModalCheck = ({ task }) => {

    const [loading, setLoading] = useState(false);
/*
    const handleCompleteTask = () => {
        setLoading(true);
        try {
            console.log("Probando")
            let fecha = new Date();
            let dia = fecha.getDate();
            let mes = 1 + fecha.getMonth();
            let anio = fecha.getFullYear();

            //editarTarea();
        } catch (error) {
            console.error("Hubo un error:", error);
        } finally {
            setLoading(false);
        }
    };*/

    return (
        <>
            <div className="modal fade" id="modalCheck" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Completar</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Desea completar la tarea:  ?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" disabled={loading}>
                                {loading ?
                                    <>
                                    <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                                    <span className="visually-hidden" role="status">Completando...</span>
                                    </>
                                    : "Completar"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default ModalCheck;