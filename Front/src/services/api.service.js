const API_URL = 'http://localhost:3000/api/tasks';

export const fetchTareas = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
        return [];
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error al conectar con la API: " + error);
    return [];
  }
};

export const crearTarea = async (task) => {
    const response = await fetch(`/api/tasks/${id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: task.titulo,
            descripcion: task.descripcion,
        }),
    });

    if (response.ok) {
        return;
    } else {
        console.error("Error al completar la tarea");
        return;
    }
}

export const editarTarea = async (task) => {
    const response = await fetch(`/api/tasks/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: task.titulo,
            descripcion: task.descripcion,
            completada: task.completada,
        }),
    });

    if (response.ok) {
        return;
    } else {
        console.error("Error al editar la tarea");
        return;
    }
}

export const eliminarTarea = async (id) => {
    const response = await fetch(`/api/tasks/${id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        return;
    } else {
        console.error("Error al eliminar la tarea");
        return;
    }
}
