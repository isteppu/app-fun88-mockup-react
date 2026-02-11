import { useRef } from 'react';
import { useGameStore } from '../../store/game-store';

const CategoriesCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { categories, gamesLoaded } = useGameStore();


    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    if (!gamesLoaded) return <div>Loading Providers...</div>;

    return (
        <div className="w-full py-4 space-y-4">
            <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    Game Providers
                </h2>

                <div className="flex gap-1">
                    <button
                        onClick={() => scroll('left')}
                        className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md transition-all border border-slate-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-1.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-md transition-all border border-slate-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide px-2 pb-2 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {categories.map((category) => (
                    <></>
                ))}
            </div>
        </div>
    );
};

export default CategoriesCarousel;