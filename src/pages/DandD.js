import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from './DandD.module.css';

const finalSpaceCharacters = [
  {
    id: '1',
    name: '월급통장',
  },
  {
    id: '2',
    name: '신용대출',
  },
  {
    id: '3',
    name: '주적금',
  },
  {
    id: '4',
    name: '냠냠먹방',
  },
];

function DandD() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        className={`${styled.li} ${styled['my' + id]}`}
                      >
                        <p>{name}</p>
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DandD;
