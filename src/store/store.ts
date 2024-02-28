import { create } from 'zustand';

interface ToggleState {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useStore = create<ToggleState>((set) => ({
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStore;