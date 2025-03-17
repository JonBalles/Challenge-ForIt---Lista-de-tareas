const express = require("express");
const router = express.Router();



router.get("/api/tasks", (req, res));
router.post("/api/tasks", (req, res));
router.put("api/tasks/:id", (req, res));
router.delete("api/tasks/:id", (req, res));




/*
GET /api/tasks - Obtener todas las tareas
○ POST /api/tasks - Crear una nueva tarea
○ PUT /api/tasks/:id - Actualizar una tarea existente
○ DELETE /api/tasks/:id -
*/


module.exports = router;