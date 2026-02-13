import { useRef } from 'react';
import { useGameStore } from '../store/game-store';
import CategoryButton from './CategoryButton';
import SearchForm from './SearchForm';
import { useUserStore } from '../store/user-store';

const CategoriesCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { categories, categoriesLoaded } = useGameStore();
    const { toggleSearch, isSearching } = useUserStore();

    if (!categoriesLoaded) return <div className='filter-carousel-skeleton'></div>;

    return (
        <div className="w-full pt-2 space-y-2 md:flex">
            <div
                ref={scrollRef}
                className="categories-carousel scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                <button
                    className='md:hidden'
                    style={{ backgroundColor: `${isSearching ? '#E6E6F2' : 'white'}`, minWidth: '50px' }}
                    onClick={toggleSearch}
                >
                    <img
                        src={'/icons/search.webp'}
                        alt="Search Button"
                        className="h-6 object-contain"
                    />
                    <span className="text-slate-400 font-medium text-xs">
                        Search
                    </span>
                </button>

                <div className="border-l-2 border-gray-300 h-auto md:hidden"></div>
                {categories.map((category) => (
                    <CategoryButton label={category.label} img={category.img} />
                ))}
            </div>
            <SearchForm />
        </div>
    );
};

export default CategoriesCarousel;