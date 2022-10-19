import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <div className="flex justify-center">
        <div
          className="text-xl font-extrabold p-3 cursor-pointer hover:text-sky-600"
          onClick={() => navigate('switch')}
        >
          Switch
        </div>
        <div
          className="text-xl font-extrabold p-3 cursor-pointer  hover:text-sky-600"
          onClick={() => navigate('drag-and-drop')}
        >
          DragAndDrop
        </div>
        <div
          className="text-xl font-extrabold p-3 cursor-pointer hover:text-sky-600"
          onClick={() => navigate('drop-list')}
        >
          DropList
        </div>
        <div
          className="text-xl font-extrabold p-3 cursor-pointer hover:text-sky-600"
          onClick={() => navigate('carousel')}
        >
          Carousel
        </div>
        <div
          className="text-xl font-extrabold p-3 cursor-pointer hover:text-sky-600"
          onClick={() => navigate('speech')}
        >
          Speech
        </div>
      </div>
    </div>
  );
};

export default Navigation;
