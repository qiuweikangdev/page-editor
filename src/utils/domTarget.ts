import type { MutableRefObject } from 'react';

type TargetValue<T> = T | undefined | null;

type TargetType = HTMLElement | Element | Window | Document;

export type BasicTarget<T extends TargetType = Element> =
  | (() => TargetValue<T>)
  | TargetValue<T>
  | MutableRefObject<TargetValue<T>>;

export function getTargetElement<T extends TargetType>(target: BasicTarget<T>, defaultElement?: T) {
  if (!target) {
    return defaultElement;
  }

  let targetElement: TargetValue<T>;

  // 可通过返回一个函数获取一个目标节点
  if (typeof target === 'function') {
    targetElement = target();
    // 可通过事件属性
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }

  return targetElement;
}
