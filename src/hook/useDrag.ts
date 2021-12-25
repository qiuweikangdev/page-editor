import React, { useEffect, useRef, useState } from 'react';
import { BasicTarget, getTargetElement } from '@/utils/domTarget';
import useLatest from './useLatest';

export interface Options {
  onDragStart?: (event: React.DragEvent) => void
  onDragEnd?: (event: React.DragEvent) => void
}
// data: 拖拽的内容、 target：dom节点对象，options一些方法的选项
const useDrag = <T>(data: T, target: BasicTarget, options: Options = {}) => {
  const optionsRef = useLatest(options);
  useEffect(() => {
    const targetElement = getTargetElement(target);
    if (!targetElement?.addEventListener) {
      return undefined;
    }
    targetElement.setAttribute('draggable', 'true');
    const onDragStart = (event: React.DragEvent) => {
      optionsRef.current.onDragStart?.(event);
      event.dataTransfer.setData('custom', JSON.stringify(data));
    };
    const onDragEnd = (event: React.DragEvent) => {
      optionsRef.current.onDragEnd?.(event);
    };
    targetElement.addEventListener('dragstart', onDragStart as any);
    targetElement.addEventListener('dragend', onDragEnd as any);
    return () => {
      // 拖拽元素卸载的时候，移除事件监听
      targetElement.removeEventListener('dragstart', onDragStart as any);
      targetElement.removeEventListener('dragend', onDragStart as any);
    };
  }, []);
};

export default useDrag;
