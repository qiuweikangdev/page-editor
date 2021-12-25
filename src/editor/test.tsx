import React, { useRef, useState } from 'react';
import useDrag from '@/hook/useDrag';
import useDrog from '@/hook/useDrog';
import { MaterialPanel } from './panels/index';

const DragItem = function ({ data }:any) {
  const dragRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  useDrag(data, dragRef, {
    onDragStart: (event) => {
      console.log(event, 'start');
      setDragging(true);
    },
    onDragEnd: () => {
      setDragging(false);
    },
  });

  return (
    <div
      ref={dragRef}
      style={{
        border: '1px solid #e8e8e8',
        padding: 16,
        width: 80,
        textAlign: 'center',
        marginRight: 16,
      }}
    >
      {dragging ? 'dragging' : `box-${data}`}
    </div>
  );
};

const App = function () {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  const drogRef = useRef<HTMLDivElement>(null);
  useDrog(drogRef, {
    onDragOver: (event:unknown) => {
    //   console.log(event, 'drag-over');
    },
    onDrop: (event:React.DragEvent) => {
      const data = event.dataTransfer.getData('custom');
      console.log(data, 'data');
    },
  });
  return (
    <div ref={drogRef}>
      render
      <div style={{ display: 'flex', marginTop: 8 }}>
        {data.map((e, i) => (
          <DragItem key={e} data={e} />
        ))}
      </div>
    </div>

  );
};

export default App;
