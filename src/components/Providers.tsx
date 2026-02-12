import { useRef } from 'react';
import { useGameStore } from '../store/game-store';
import ProviderButton from './ProviderButton';
import { NextIcon, PrevIcon } from '../assets/Icons';

const ProviderCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { resGames, gamesLoaded, providers, providersLoaded } = useGameStore();


    const getCount = (provider: string) => {
        return resGames.filter((game) => game.provider === provider).length;
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 2
                : scrollLeft + clientWidth / 2;

            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    if (!gamesLoaded || !providersLoaded) return <div className='filter-carousel-skeleton'></div>;

    return (
        <div className="providers-carousel">
            <div className="providers-label-div">
                <h2>Game Providers</h2>

                <div className="flex gap-1">
                    <button onClick={() => scroll('left')}>
                        <PrevIcon />
                    </button>
                    <button onClick={() => scroll('right')}>
                        <NextIcon />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="provider-buttons-div scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {providers.map((provider) => (
                    <ProviderButton key={provider.name} provider={provider.name} count={getCount(provider.name)} />
                ))}
            </div>
        </div>
    );
};

export default ProviderCarousel;