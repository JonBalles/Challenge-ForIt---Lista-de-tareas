const TaskForm = ({ task }) => {

  return (
    <>
      <div className="modal fade" id="taskForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">Agregar tarea</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="container">
                <div className="form-group">
                  <label htmlFor="tittle">Titulo</label>
                  <input 
                    type="text"
                    className="form-control" 
                    id="tittle" 
                    aria-describedby="emailHelp" 
                    placeholder="Introduce el titulo de la tarea" 
                    defaultValue={task?.description || ''}
                  />
                  <small id="tittleError" className="invalid-feedback">Debes ingresar un titulo.</small>
                </div>
                <div className="form-group">
                  <label htmlFor="task">Tarea</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="task"
                    placeholder="Descripcion de la tarea"
                    defaultValue={task?.description || ''}/>
                  <small id="taskError" className="invalid-feedback">El campo no debe estar vacio.</small>
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-end">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TaskForm;