import { Button } from 'antd';
import React, { ReactNode } from 'react';
// 注册物料组件
// const registerKeys = ['text', 'button', 'input'];

export type ComponentsType = {
  label:string,
  key: string | number
  preview:()=> ReactNode,
  render:()=> ReactNode
};

export type CreateEditorComponentType = {
  register:(component:ComponentsType)=> void,
  componentsList:ComponentsType[],
  componentsMap:Partial<ComponentsType>
};

// 创建编辑拖拽组件
const createEditorComponent = ():CreateEditorComponentType => {
  const componentsList:ComponentsType[] = [];
  const componentsMap:Partial<ComponentsType> = {};
  return {
    register: (component:ComponentsType) => {
      componentsList.push(component);
      componentsMap[component.key] = component;
    },
    componentsList,
    componentsMap,
  };
};
// 可通过webpack打包动态去加载组件
// 格式
// {
//   label:'文本',
//   preview:()=>'预览文本',
//   render:()=>'渲染文本',
//   key:'text'
// }
export const createEditor = createEditorComponent();
createEditor.register({
  label: '文本',
  preview: () => '预览文本',
  render: () => '渲染文本',
  key: 'text',
});
createEditor.register({
  label: '按钮',
  preview: () => <Button>预览按钮</Button>,
  render: () => <Button>按钮</Button>,
  key: 'button',
});
