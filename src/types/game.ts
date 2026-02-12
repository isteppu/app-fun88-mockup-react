import type { Banner } from "./banner";

export interface Game {
    name: string;
    provider: string;
    img: string;
    categories: string[];
    isFavorite?: boolean;
    jackpotValue?: string;
}

export interface Category {
    label: string;
    img: string;
}

export interface Provider {
    name: string;
    img: string;
}

export interface ProviderStats {
    [providerName: string]: number;
}

export interface GameCardProps {
    game: Game;
}

export interface GameState {
    banners: Banner[];
    games: Game[];
    resGames: Game[];
    categories: Category[];
    providers: Provider[];
    bannersLoaded: boolean;
    gamesLoaded: boolean;
    categoriesLoaded: boolean;
    providersLoaded: boolean;
    activeCategory: string;
    activeProvider: string;
    searchQuery: string;
    favorites: string[];
    showFavoritesOnly: boolean;
    setActiveCategory: (cat: string) => void;
    setActiveProvider: (prov: string) => void;
    fetchBanners: () => Promise<void>;
    fetchGames: (params?: { category?: string; provider?: string }) => Promise<void>;
    fetchCategories: () => Promise<void>;
    fetchProviders: () => Promise<void>;
    setSearchQuery: (query: string) => void;
    toggleFavorite: (gameName: string) => void;
    setShowFavorites: (val: boolean) => void;
}