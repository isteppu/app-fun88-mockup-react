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

export interface FetchParams {
    category?: string;
    provider?: string;
    search?: string;
    limit?: number;
}

export interface ProviderStats {
    [providerName: string]: number;
}

export interface GameState {
    banners: Banner[];
    games: Game[];
    categories: Category[];
    bannersLoaded: boolean;
    gamesLoaded: boolean;
    categoriesLoaded: boolean;

    fetchBanners: () => Promise<void>;
    fetchGames: () => Promise<void>;
    fetchCategories: () => Promise<void>;
}