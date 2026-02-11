import { useRef } from 'react';
import { useGameStore } from '../../store/game-store';
import CategoryButton from '../CategoryButton';

const CategoriesCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { categories, categoriesLoaded } = useGameStore();

    if (!categoriesLoaded) return <div>Loading Categories...</div>;

    return (
        <div className="w-full py-4 space-y-2">

            <div
                ref={scrollRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <button
                    className="shrink-0 flex flex-col items-center justify-between gap-1 px-3 py-3 bg-white transition-all min-w-180px"
                >
                    <img
                        src={'/icons/search.webp'}
                        alt="Search Button"
                        className="h-6 object-contain grayscale hover:grayscale-0 transition-all"
                        onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100x40?text=Search')}
                    />
                    <span className="text-slate-400 font-medium text-xs">
                        Search
                    </span>
                </button>

                <div className="border-l-2 border-gray-300 h-auto"></div>
                {categories.map((category) => (
                    <CategoryButton label={category.label} img={category.img} />
                ))}
            </div>
        </div>
    );
};

export default CategoriesCarousel;