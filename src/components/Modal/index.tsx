import React, { useEffect, useState } from 'react'
import "./style.css"
import { IoMdCloseCircleOutline } from "react-icons/io";


const Modal = ({openEditModal, isModalOpen, task, editInputValue, setEditInputValue, editTask}) => {

  

  return (
    <div className='modalContainer' style={{display: `${openEditModal ? "flex": "none"}`}}>
        <div className='closeModalBtn'>
            <span className='closeIconContainer' onClick={isModalOpen}><IoMdCloseCircleOutline /></span>
        </div>
                <h3>{task.name}</h3> 

         

        <div className="editInputsContainer">
        <input type="text" className='editTaskInput' value={editInputValue} onChange={(e) => setEditInputValue(e.target.value)}/>
        <button className='editBtn'  onClick={() => editTask(task.id, editInputValue)}>Alterar</button>
        </div>
    </div>
  )
}

export default Modal