import { useGameStore } from '../../store/game-store';
import GameCard from '../GameCard';

const GameGrid = () => {
  const { games, gamesLoaded } = useGameStore();


  if (!gamesLoaded) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-2">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="aspect-square bg-slate-200 rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-6 p-2">
      {games.map((game, index) => (
        <GameCard key={`${game.name}-${index}`} game={game} />
      ))}
    </div>
  );
};

export default GameGrid;