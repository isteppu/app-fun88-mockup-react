import { games, banners, categories, providers } from '../lib/data';
import type { Game } from '../types';

export const gameService = {
    getGames: async (): Promise<Game[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(games);
            }, 3000);
        });
    },

    getCategories: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(categories), 3000);
        });
    },

    getProviders: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(providers), 3000);
        });
    },

    getBanners: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(banners), 3000);
        });
    }
};