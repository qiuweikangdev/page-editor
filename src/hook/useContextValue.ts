// 统一创建context 对象
import { createContext } from 'react';
import { createEditor, CreateEditorComponentType } from '@/utils/registerComponent';

export enum ContextType {
  CreateEditor = 'createEditor',
}

export type CreateContextType = {
  [ContextType.CreateEditor]: CreateEditorComponentType
};

const createContextMap = {
  createEditor,
};

export const CreateEditorContext = createContext(createEditor);

function useContextValue(contextType:Uncapitalize<keyof typeof ContextType>) {
  const contextValue = createContextMap[contextType];
  return contextValue;
}

export default useContextValue;
