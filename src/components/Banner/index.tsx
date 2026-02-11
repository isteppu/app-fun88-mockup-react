import { useState, useEffect } from 'react';
import { useGameStore } from '../../store/game-store';

const BannerCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { banners, bannersLoaded } = useGameStore();

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const nextSlide = () => {
        const isLastSlide = currentIndex === banners.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (!bannersLoaded) {
        return (
            <div className="w-full rounded-2xl bg-slate-200 animate-pulse aspect-21/9 md:aspect-3/1" />
        );
    }

    return (
        <div className="relative group w-full overflow-hidden rounded-2xl shadow-sm bg-slate-100">
            <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {banners.map((banner, index) => (
                    <div key={index} className="w-full shrink-0">
                        <img
                            src={banner.img}
                            alt={banner.name}
                            className="w-full aspect-21/9 md:aspect-3/1 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default BannerCarousel;