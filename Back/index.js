const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors")
app.use(express.json());
app.use(cors());

let tareas = [
    { id: 1, titulo: "Sacar la basura", descripcion: "Recolectar restos y chatarra", completada: false, creada: "18/3/2025", finalizada: "" },
    { id: 2, titulo: "Pasear al perro", descripcion: "Pasear a Pipo", completada: false, creada: "18/3/2025", finalizada: ""  },
    { id: 3, titulo: "Cocinar", descripcion: "Cortar verduras y hervir", completada: false, creada: "18/3/2025", finalizada: ""  },
    { id: 4, titulo: "Mejorar en React", descripcion: "Meterle info al cerebro para terminar el challenge", completada: true, creada: "18/3/2025", finalizada: "18/3/2025"  },
    { id: 5, titulo: "Animarse a despegar", descripcion: "Tengo la capacidad de hacer muchas cosas. Deberia desafiarme mas seguido", completada: true, creada: "18/3/2025", finalizada: "18/3/2025"  }
]


function crearTarea(titulo, descripcion){
    const id = tareas.length + 1;
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = 1 + fecha.getMonth();
    let anio = fecha.getFullYear();
    const nuevaTarea = { id, titulo, descripcion, completada: false, creada: `${dia}/${mes}/${anio}`, finalizada: ""};
    tareas.push(nuevaTarea)
}

app.get("/api/tasks", (req, res) => {
    res.json(tareas);
});

app.get("/api/tasks/:id", (req, res) => {
    const {id}  = req.params;
    const tarea = tareas.find(tarea => tarea.id == id);
    if (!tarea) {
        res.status(404).json({ mensaje: "ID inválido" });
        return;
    }
    res.json(tarea);
});

app.post("/api/tasks", (req, res) =>{
    const { titulo, descripcion } = req.body;
    
    if (!titulo || !descripcion) {
        res.status(400).json({ mensaje: "Error de datos" });
        return;
    }

    crearTarea(titulo, descripcion);

    res.status(200).json({ mensaje: "Tarea creada exitosamente" });
});

app.put("/api/tasks/:id", (req, res)=>{
    const id  = req.params;
    const { titulo, descripcion, completada, finalizada } = req.body;

    if (!titulo || !descripcion || completada === undefined) {
        res.status(400).json({ mensaje: "Error de datos" });
        return;
    }

    const tarea = tareas.find(tarea => tarea.id == id);
    if (!tarea) {
        res.status(404).json({ mensaje: "ID inválido" });
        return;
    }
    let fecha = new Date();
    let dia = fecha.getDate();
    let mes = 1 + fecha.getMonth();
    let anio = fecha.getFullYear();

    tarea.titulo = titulo;
    tarea.descripcion = descripcion;
    tarea.completada = completada;
    finalizada == "" ? tarea.finalizada = "" : tarea.finalizada = `${dia}/${mes}/${anio}`;
    res.status(200).json({ mensaje: "Tarea editada exitosamente" });
});

app.delete("/api/tasks/:id", (req, res)=>{
    const id =req.params;
    const tareaID = tareas.findIndex(tarea => tarea.id == id);
    if (tareaID === -1) {
        res.status(404).json({ mensaje: "ID inválido" });
        return;
    }
    tareas.splice(tareaID, 1);
   

    res.status(200).json({ mensaje: "Tarea eliminada exitosamente" });
});


app.listen(PORT, () => {
    console.log(`
      server http://localhost:${PORT}
      Acceder a tareas: http://localhost:${PORT}/api/tasks
      `);
  });