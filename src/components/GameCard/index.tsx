import { useState } from 'react';
import type { Game } from '../../types';

interface GameCardProps {
    game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
    const [isFav, setIsFav] = useState(false);
    const isHot = game.categories.includes('Hot');

    return (
        <div className="relative group flex flex-col w-full animate-fadeIn">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-slate-100 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md">

                <img
                    src={game.img}
                    alt={game.name}
                    className="w-full h-full object-cover"
                />
                
                <div className="absolute top-2 left-2 right-2 flex justify-between items-start z-20">
                    {isHot ? (
                        <img
                            src="/game-icons/hot.webp"
                            alt="Hot"
                            className="w-8 h-10 drop-shadow-md"
                        />
                    ) : <div />}

                    <button
                        onClick={() => setIsFav(!isFav)}
                        className="transition-transform active:scale-125"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill={isFav ? "#FFD700" : "rgba(255,255,255,0.5)"}
                            className={`w-6 h-6 drop-shadow-md stroke-white/30 stroke-1 ${isFav ? 'text-yellow-400' : ''}`}
                        >
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div
                    className="absolute top-0 right-0 w-15 h-15 bg-black/40 z-10"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
                />
            </div>
        </div>
    );
};

export default GameCard;