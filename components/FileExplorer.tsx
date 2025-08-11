import React from 'react';
import { useStore } from '../lib/store';
import { FileText } from 'lucide-react';
import styles from '../styles/FileExplorer.module.css';

export const FileExplorer = () => {
  const { files, activeFile, setActiveFile } = useStore();

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>EXPLORER</h3>
      <ul>
        {files.map((filename) => (
          <li
            key={filename}
            className={`${styles.fileItem} ${activeFile === filename ? styles.active : ''}`}
            onClick={() => setActiveFile(filename)}
          >
            <FileText size={16} className={styles.icon} />
            <span>{filename}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
