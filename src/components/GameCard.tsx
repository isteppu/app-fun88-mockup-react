import type { GameCardProps } from "../types";
import { useGameStore } from "../store/game-store";
import { StarIcon } from "../assets/Icons";

const GameCard = ({ game }: GameCardProps) => {
    const isHot = game.categories.includes("Hot");
    const { favorites, toggleFavorite } = useGameStore();
    const isFav = favorites.includes(game.name);

    return (
        <div className="relative group flex flex-col w-full animate-fadeIn">
            <div className="game-card-thumb">
                <img src={game.img} alt={game.name} />

                <div className="game-card-thumb-overlay">
                    {isHot ? (
                        <img
                            src="/game-icons/hot.webp"
                            alt="Hot"
                            className="w-8 h-10 drop-shadow-md"
                        />
                    ) : (
                        <div />
                    )}

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            toggleFavorite(game.name);
                        }}
                    >
                        <StarIcon
                            fill={isFav ? "#FFD700" : "rgba(255,255,255,0.5)"}
                            className={` ${isFav ? "text-yellow-400" : ""}`}
                        />
                    </button>
                </div>

                <div
                    className="overlay-black"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
                />
            </div>
        </div>
    );
};

export default GameCard;
