// 物料面板
import React, { FC, useContext, useRef } from 'react';
import { CreateEditorContext } from '@/hook/useContextValue';
import useDrag from '@/hook/useDrag';
import { ComponentsType } from '@/utils/registerComponent';

const DragComponent:FC<ComponentsType> = (props) => {
  const { label, preview } = props;
  const dragRef = useRef<HTMLDivElement>(null);
  useDrag(label, dragRef, {
    onDragStart: (event) => {
      console.log(event);
    },
  });
  return (
    <div ref={dragRef}>
      {preview()}
    </div>
  );
};

const MaterialPanel = function () {
  const createEditorContext = useContext(CreateEditorContext);
  const { componentsList } = createEditorContext;
  return (
    <div>
      <div>物料面板</div>
      {
            componentsList.map((item) => (
              <DragComponent {...item} key={item.key} />
            ))
        }
    </div>
  );
};
export default MaterialPanel;
