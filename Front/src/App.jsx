import Header from './Components/Header/header.jsx'
import Card from "./Components/Card/card.jsx"
let tareas = [];
fetch('http://localhost:3000/api/tasks')
  .then(response => response.json())
  .then(data => {
    if(!data || data.length == 0){
      return;
    }
    tareas = data
  })
  .catch(error => console.log("Hubo un error al hacer fetch: " + error))

function App() {

  return (
    <>
    <Header />
      <main className="container">
     { tareas.map(tarea =>
        <Card key={tarea.id}
          titulo={tarea.titulo} 
          descripcion={tarea.descripcion} 
          creada={tarea.creada} 
          completada={tarea.completada} />
      )}
      </main>
    </>
  )
}

export default App
