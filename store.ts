import { create } from 'zustand';

// This mock data is now primarily for the file list display.
// The editor's content will be synced via Y.js.
export const initialFiles = [
  'README.md',
  'index.js',
  'styles/main.css'
];

type AppState = {
  files: string[];
  activeFile: string;
  setActiveFile: (filename: string) => void;
};

export const useStore = create<AppState>((set) => ({
  files: initialFiles,
  activeFile: 'README.md', // The default open file
  setActiveFile: (filename) => set({ activeFile: filename }),
}));
