import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { UserState } from '../types';

export const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            isFullscreen: false,
            isSearching: false,
            toggleFullscreen: () => set({ isFullscreen: !get().isFullscreen }),
            toggleSearch: () => set({ isSearching: !get().isSearching }),
        }),
        {
            name: 'user-storage',
            partialize: (state) => ({ isFullscreen: state.isFullscreen, isSearching: state.isSearching }),
        }
    )
);