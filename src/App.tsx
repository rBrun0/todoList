import './App.css'
import { MdOutlineDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

// <MdOutlineDelete />

function App() {

  type taskElements = {
    id: number,
    name: string,
    isEditing: boolean
  }

  const [inputValue, setInputValue] = useState("");

  const [indice, setIndice] = useState(0)
  const [taskComplete, setTaskComplete] = useState(false);
  const [taskList, setTasklist] = useState([]);
  const [editInputValue, setEditInputValue] = useState("")
  const [openEditModal, setOpenEditModal] = useState(false)

  const completeTask = () => {
    if(taskComplete){
      setTaskComplete(false)
    } else{
      setTaskComplete(true)
    }
  }

  const addTask = () => {
    if(inputValue.length > 0){
      const todoCreated = {
        id: indice,
        name:inputValue
      }
      
      setTasklist([...taskList, todoCreated])
    }

    // setIndice(indice + 1)
    console.log(indice)
  }

  const removeTask = (id:number) => {
    setTasklist(taskList.filter((task) => {
      task.id !== id
    }))
  }

  const editTask = (id, name) => {
    //taskList

    const editedList = [...taskList];

    setTasklist([...taskList, {id, name}])
    isModalOpen()
  }

  const isModalOpen = () => {
  setOpenEditModal(!openEditModal)
  }

  useEffect(() => {
    setIndice(indice + 1)
    console.log(indice)
  }, [taskList])

  return (
    <>

    {/* <Modal openEditModal={openEditModal} isModalOpen={isModalOpen} setTasklist={setTasklist} taskList={taskList}/> */}

    <div className='inputContainer'>
    <input type="text"  className='addTaskInput' value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    <button className='addTaskBtn' onClick={addTask}>Add</button>
    </div>

    <div className='listContainer'>
    {taskList.map((task, index) => (
      <div className="taskDiv" key={index}>
        
         <Modal openEditModal={openEditModal} isModalOpen={isModalOpen} task={task} editInputValue={editInputValue} setEditInputValue={setEditInputValue}  editTask={editTask}/> 


      <p className='taskName' style={{textDecoration:`${taskComplete ? "line-through" : "none"}`}} onClick={completeTask}>{task.name}</p>
      <div className='actionsContainer'>
        <div className='editIconContainer' onClick={isModalOpen}>
        <CiEdit />
        </div>
        <div className='removeIconContainer' onClick={() => removeTask(indice)}>
        <MdOutlineDelete />
        </div>
      </div>
      </div>          
          ))}

    </div>
    </>
  )
}

export default App
