import React, { ReactNode } from 'react';
import styles from '../styles/IdeLayout.module.css';

type IdeLayoutProps = {
  fileExplorer: ReactNode;
  editor: ReactNode;
  terminal: ReactNode;
  spotifyWidget: ReactNode;
};

export const IdeLayout = ({ fileExplorer, editor, terminal, spotifyWidget }: IdeLayoutProps) => {
  return (
    <div className={styles.ideContainer}>
      <aside className={styles.sidebar}>
        {fileExplorer}
        <div className={styles.spotifyContainer}>
          {spotifyWidget}
        </div>
      </aside>
      <main className={styles.mainContent}>
        <div className={styles.editorArea}>
          {editor}
        </div>
        <div className={styles.terminalArea}>
          {terminal}
        </div>
      </main>
    </div>
  );
};
