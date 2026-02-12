export interface UserState {
    isFullscreen: boolean;
    isSearching: boolean;
    toggleFullscreen: () => void;
    toggleSearch: () => void;
}