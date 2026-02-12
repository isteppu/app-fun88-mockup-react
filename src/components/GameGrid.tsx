import { useGameStore } from '../store/game-store';
import GameCard from './GameCard';

const GameGrid = () => {
    const { games, gamesLoaded, favorites, showFavoritesOnly, searchQuery } = useGameStore();

    const displayedGames = games.filter(game => {
        const matchesSearch = game.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesFav = showFavoritesOnly ? favorites.includes(game.name) : true;

        return matchesSearch && matchesFav;
    });

    if (!gamesLoaded) {
        return (
            <div className="game-grid-skeleton">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="" />
                ))}
            </div>
        );
    }

    if (showFavoritesOnly && displayedGames.length === 0) {
        return (
            <div className="game-grid-nogamesfound">
                <p>No games found</p>
            </div>
        );
    }

    return (
        <div className="game-grid">
            {displayedGames.map((game, index) => (
                <GameCard key={`${game.name}-${index}`} game={game} />
            ))}
        </div>
    );
};

export default GameGrid;