import { games, banners } from '../lib/data';
import type { FetchParams, Game } from '../types';

export const gameService = {
    getGames: async (params?: FetchParams): Promise<Game[]> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let filteredGames = [...games];

                if (params?.category) {
                    filteredGames = filteredGames.filter(g =>
                        g.categories.includes(params.category!)
                    );
                }

                if (params?.provider) {
                    filteredGames = filteredGames.filter(g =>
                        g.provider === params.provider
                    );
                }

                if (params?.search) {
                    filteredGames = filteredGames.filter(g =>
                        g.name.toLowerCase().includes(params.search!.toLowerCase())
                    );
                }

                resolve(params?.limit ? filteredGames.slice(0, params.limit) : filteredGames);
            }, 3000);
        });
    },


    getBanners: async () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve(banners), 3000);
        });
    }
};