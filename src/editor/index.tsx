import React from 'react';
import { MaterialPanel, RenderPanel } from './panels';
import useContextValue, { ContextType, CreateEditorContext } from '@/hook/useContextValue';
import styles from './styles.less';

console.log(styles);

const Editor = function () {
  const EditorValue = useContextValue(ContextType.CreateEditor);
  return (
    <CreateEditorContext.Provider value={EditorValue}>
      <div className={styles.editor_wrapper}>
        <div className={styles.editor_left}>
          <MaterialPanel />
        </div>
        <div className={styles.editor_center}>
          <RenderPanel />
        </div>
      </div>
    </CreateEditorContext.Provider>
  );
};

export default Editor;
