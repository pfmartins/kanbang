import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Task } from "./Task";

export const Column = (props) => {
  return (
    <Draggable draggableId={props.column.id} index={props.index}>
      {(provided) => (
        <div
          className="container-column"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <h3 {...provided.dragHandleProps}>{props.column.title}</h3>
          <Droppable droppableId={props.column.id} type="task">
            {(provided) => (
              <div
                className="taskList"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {props.tasks.map((task, index) => (
                  <Task key={task.id} task={task} index={index} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
