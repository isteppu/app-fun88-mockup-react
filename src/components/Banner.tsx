import { useState, useEffect } from 'react';
import { useGameStore } from '../store/game-store';
import { useUserStore } from '../store/user-store';

const BannerCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { banners, bannersLoaded } = useGameStore();
    const isFullscreen = useUserStore((state) => state.isFullscreen);

    useEffect(() => {
        const timer = setInterval(nextSlide, 2000);
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
        <div 
            className="banner-carousel"
            style={{ marginTop: isFullscreen ? '0' : '4rem' }}    
        >
            <div
                className="banner-div"
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