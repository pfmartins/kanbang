import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaExclamationTriangle, FaExpandAlt } from "react-icons/fa";
import Modal from "../modal";

export const Task = (props) => {
  const [openModal, setOpenModal] = useState(false);


  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided) => (
        <div
          className="task-card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="task-card-header">
            <div className="kb-tooltip">
              {props.task.priority === "urgente" ? <FaExclamationTriangle className="task-card-urgent-priority-icon" /> :
                props.task.priority === "alta" ? <FaExclamationTriangle className="task-card-high-priority-icon" /> :
                  props.task.priority === "média" ? <FaExclamationTriangle className="task-card-medium-priority-icon" /> :
                    <FaExclamationTriangle className="task-card-low-priority-icon " />}
              <div className="kb-tooltip__content">{props.task.priority}</div>
            </div>
            <div className="task-card-tags-container">
              <span className="task-card-tag">{props.task.tag}</span>
            </div>
          </div>
          <div className="task-container">
            <div className="task-title">{props.task.title}</div>
            <div className="task-details">{props.task.content}</div>
          </div>
          <div className="comments-container">
            <div className="kb-tooltip">
              <FaExpandAlt onClick={() => { setOpenModal(true) }} />
              <div className="kb-tooltip__comments">Ver detalhes</div>
            </div>
          </div>
          {openModal && <Modal title={props.task.title} details={props.task.content} closeModal={setOpenModal} />}
        </div>
      )}
    </Draggable>
  );
};
