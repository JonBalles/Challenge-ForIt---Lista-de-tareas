import 'bootstrap-icons/font/bootstrap-icons.css';
import Header from './Components/Header/header.jsx'
import TaskForm from './Components/TaskForm/index.jsx'
import TaskManager from './Components/TaskManager/index.jsx'
import ModalCheck from './Components/ModalCheck/index.jsx';

function App() {

  return (
    <>
    <Header />
    <ModalCheck />
    <TaskManager />
    <TaskForm />
    </>
  )
}

export default App
