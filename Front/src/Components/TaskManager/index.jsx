import {fetchTareas} from './../../services/api.service.js';
import Card from './../TaskItem/card.jsx';
import { useEffect, useState } from 'react';

const TaskManager = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const getTareas = async () => {
      const tareasData = await fetchTareas();
      if (!tareasData && tareasData.length == 0) {
        setTareas([]); 
      } else {
        setTareas(tareasData);
      }
    };

    getTareas(); 
  }, []); 
  
    return (
            <main className="container justify-content-center p-3">
              <div className='container row justify-content-center'>
               <button className='btn btn-primary row' data-bs-toggle="modal" data-bs-target="#taskForm">Agregar tarea</button>
              </div>
              
              <div className='container row justify-content-center align-items-center'>
                {!tareas ? <h1>No hay tareas</h1> :
                  tareas.map(tarea =>
                    <Card key={tarea.id}
                    id={tarea.id}
                    titulo={tarea.titulo}
                    descripcion={tarea.descripcion}
                    creada={tarea.creada}
                    completada={tarea.completada} />
                  )
                }          
              </div>
            </main>       
    )
}

export default TaskManager;