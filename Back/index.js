const express = require("express");
const app = express();
const port = 3000;

let tareas = [
    { id: 1, nombre: "Sacar la basura", descripcion: "Recolectar restos y chatarra", completada: false },
    { id: 2, nombre: "Pasear al perro", descripcion: "Pasear a Pipo", completada: false },
    { id: 3, nombre: "Cocinar", descripcion: "Cortar verduras y hervir", completada: false }
]



app.get("/api/tasks", (req, res));
app.post("/api/tasks", (req, res) =>{
    const { nombre, descripcion } = req.body;
    if (!nombre || !descripcion) {
        res.status(400).send("Datos incompletos");
        return;
    }
    const id = tareas.length ++;
    const nuevaTarea = { id, nombre, descripcion, completada: false };
    tareas.push(nuevaTarea)

});
app.put("api/tasks/:id", (req, res));
app.delete("api/tasks/:id", (req, res));