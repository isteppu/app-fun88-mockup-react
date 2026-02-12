import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { gameService } from '../services/data';
import type { Banner, Category, GameState, Provider } from '../types';

export const useGameStore = create<GameState>()(
	persist(
		(set, get) => ({
			banners: [],
			games: [],
			resGames: [],
			categories: [],
			providers: [],
			favorites: [],
			bannersLoaded: false,
			gamesLoaded: false,
			categoriesLoaded: false,
			providersLoaded: false,
			showFavoritesOnly: false,
			searchQuery: '',
			activeCategory: '',
			activeProvider: '',
			setActiveCategory: (category: string) => {
				if (category === get().activeCategory) {
					set({ activeCategory: '' })
					get().fetchGames();
					return;
				}
				const filteredGames = get().resGames.filter(g =>
					g.categories.includes(category!)
				);
				set({ activeCategory: category, activeProvider: '', games: filteredGames });
			},

			setActiveProvider: (provider: string) => {
				if (provider === get().activeProvider) {
					set({ activeProvider: '' })
					get().fetchGames();
					return;
				}
				const filteredGames = get().resGames.filter(g =>
					g.provider.includes(provider!)
				);
				set({ activeProvider: provider, activeCategory: '', games: filteredGames });
			},
			fetchBanners: async () => {
				if (get().bannersLoaded) return;

				const data = await gameService.getBanners();
				set({ banners: data as Banner[], bannersLoaded: true });
			},

			fetchGames: async () => {
				const data = await gameService.getGames();
				set({ games: data, resGames: data, gamesLoaded: true });
			},

			fetchCategories: async () => {
				if (get().categoriesLoaded) return;

				const data = await gameService.getCategories();
				set({ categories: data as Category[], categoriesLoaded: true });
			},

			fetchProviders: async () => {
				if (get().providersLoaded) return;

				const data = await gameService.getProviders();
				set({ providers: data as Provider[], providersLoaded: true });
			},

			setSearchQuery: (query: string) => {
				set({
					searchQuery: query,
					showFavoritesOnly: false
				});
			},
			toggleFavorite: (gameName: string) => {
				const { favorites } = get();
				const isAlreadyFav = favorites.includes(gameName);

				if (isAlreadyFav) {
					set({ favorites: favorites.filter(name => name !== gameName) });
				} else {
					set({ favorites: [...favorites, gameName] });
				}
			},

			setShowFavorites: (val: boolean) => {
				get().setActiveCategory('');
				get().setActiveProvider('');
				set({
					showFavoritesOnly: val,
				});
			}
		}),
		{
			name: 'casino-storage',
			partialize: (state) => ({ banners: state.banners, games: state.games, categories: state.categories }),
		}
	)
);