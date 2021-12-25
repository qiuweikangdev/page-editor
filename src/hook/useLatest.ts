import { useRef } from 'react';
/**
 *
 *  返回当前最新值的 Hook，可以避免闭包问题 [组件重新渲染，会产生闭包环境，之前的状态丢失]。
 *  保证组件能在不重新渲染的情况下拿到最新的函数引用
 */
function useLatest<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;

  return ref;
}

export default useLatest;
