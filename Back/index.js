const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let tareas = [
    { id: 1, titulo: "Sacar la basura", descripcion: "Recolectar restos y chatarra", completada: false, creada: "18/3/2025"},
    { id: 2, titulo: "Pasear al perro", descripcion: "Pasear a Pipo", completada: false, creada: "18/3/2025" },
    { id: 3, titulo: "Cocinar", descripcion: "Cortar verduras y hervir", completada: false, creada: "18/3/2025" }
]


function crearTarea(titulo, descripcion){
    const id = tareas.length + 1;
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = 1 + fecha.getMonth();
    let anio = fecha.getFullYear();
    const nuevaTarea = { id, titulo, descripcion, completada: false, creada: `${dia}/${mes}/${anio}`};
    tareas.push(nuevaTarea)
}

app.get("/api/tasks", (req, res) => {
    res.json(tareas);
});

app.get("/api/tasks/:id", (req, res) => {
    const {id}  = req.params.id;
    const tarea = tareas.find(tarea => tarea.id == id);
    if (!tarea) {
        res.status(404).send("ID de invalido");
        return;
    }
    res.json(tarea);
});

app.post("/api/tasks", (req, res) =>{
    const { titulo, descripcion } = req.body;
    
    if (!titulo || !descripcion) {
        res.status(400).send("Datos incompletos");
        return;
    }

    crearTarea(titulo, descripcion);

    res.status(200).send("Tarea creada exitosamente");
});

app.put("/api/tasks/:id", (req, res)=>{
    const id  = req.params.id;
    const { titulo, descripcion, completada } = req.body;

    if (!titulo || !descripcion || completada === undefined) {
        res.status(400).send("Datos incompletos");
        return;
    }

    const tarea = tareas.find(tarea => tarea.id == id);
    if (!tarea) {
        res.status(404).send("ID de invalido");
        return;
    }
    tarea.titulo = titulo;
    tarea.descripcion = descripcion;
    tarea.completada = completada;
    res.status(200).send("Tarea editada exitosamente");
});

app.delete("/api/tasks/:id", (req, res)=>{
    const id =req.params.id;
    const tareaID = tareas.findIndex(tarea => tarea.id == id);
    if (tareaID === -1) {
        res.status(404).send("ID de invalido");
        return;
    }
    tareas.splice(tareaID, 1);

    res.status(200).send("Tarea eliminada con exito");
});


app.listen(PORT, () => {
    console.log(`
      server http://localhost:${PORT}
      Acceder a tareas: http://localhost:${PORT}/api/tasks
      `);
  });