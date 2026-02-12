import { motion, AnimatePresence } from 'framer-motion';
import { useUserStore } from '../store/user-store';
import { useGameStore } from '../store/game-store';
import { ExpandIcon, FavoriteIcon } from '../assets/Icons';

const BottomBar = () => {
    const { isFullscreen, toggleFullscreen } = useUserStore();
    const { showFavoritesOnly, setShowFavorites } = useGameStore();

    return (
        <AnimatePresence>
            {
                !isFullscreen && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="bottom-bar shadow-[0_-4px_10px_rgba(0,0,0,0.05)]"
                    >
                        <div className="bottom-bar-div">

                            <button onClick={() => setShowFavorites(!showFavoritesOnly)}>
                                <FavoriteIcon stroke={showFavoritesOnly ? 'blue' : 'currentColor'} className='w-6 h-6' />
                                <span style={{ color: showFavoritesOnly ? 'blue' : 'inherit' }}>Favorite</span>
                            </button>

                            <button onClick={toggleFullscreen}>
                                <ExpandIcon />
                                <span>Expand</span>
                            </button>

                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default BottomBar;