import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { gameService } from '../services/data';
import type { Banner, GameState } from '../types';

export const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      banners: [],
      games: [],
      bannersLoaded: false,
      gamesLoaded: false,

      fetchBanners: async () => {
        if (get().bannersLoaded) return;
        
        const data = await gameService.getBanners();
        set({ banners: data as Banner[], bannersLoaded: true });
      },

      fetchGames: async () => {
        if (get().gamesLoaded) return;
        
        const data = await gameService.getGames();
        set({ games: data, gamesLoaded: true });
      },
    }),
    {
      name: 'casino-storage',
      partialize: (state) => ({ banners: state.banners, games: state.games }),
    }
  )
);