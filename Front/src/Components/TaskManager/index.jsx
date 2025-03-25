import { fetchTareas } from './../../services/api.service.js';
import Card from './../TaskItem/card.jsx';
import TaskForm from './../TaskForm/index.jsx';
import ModalCheck from './../ModalCheck/index.jsx';
import { useEffect, useState } from 'react';

const TaskManager = () => {
    const [tareas, setTareas] = useState([]);
    const [taskEdit, setTaskEdit] = useState(null);
    const [selectedTask, setSelectedTask] = useState(null);

    const getTareas = async () => {
        try {
            const tareasData = await fetchTareas();
            setTareas(tareasData || []);
        } catch (error) {
            console.error("Error al obtener tareas:", error);
            setTareas([]);
        }
    };


    useEffect(() => {
        getTareas();
    }, []);

    return (
        <main className="container justify-content-center p-3">
            <div className='container row justify-content-center'>
                <button className='btn btn-primary row' data-bs-toggle="modal" data-bs-target="#taskForm" onClick={() => setTaskEdit(null)}>Agregar tarea</button>
            </div>

            <div className='container row justify-content-center align-items-center'>
                {tareas.length === 0 ? <h1>No hay tareas</h1> :
                    tareas.map(tarea =>
                        <Card key={tarea.id}
                            {...tarea}
                            onEdit={(id) => setTaskEdit(tareas.find(t => t.id === id))}
                            onComplete={() => setSelectedTask(tarea)}
                            actualizarLista={getTareas}
                        />
                    )
                }
            </div>

            <TaskForm task={taskEdit} actualizarLista={getTareas} />
            <ModalCheck task={selectedTask} actualizarLista={getTareas} />
        </main>
    );
};

export default TaskManager;
