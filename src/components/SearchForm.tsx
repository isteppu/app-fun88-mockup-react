import { motion, AnimatePresence } from 'framer-motion';
import { useUserStore } from '../store/user-store';
import { useGameStore } from '../store/game-store';

const SearchForm = () => {
    const isSearching = useUserStore((state) => state.isSearching);
    const { searchQuery, setSearchQuery } = useGameStore();

    // if (!isSearching) return null;

    return (
        <>
            <AnimatePresence>
                {
                    isSearching && (
                        <motion.nav
                            initial={{ y: -20 }}
                            animate={{ y: 0 }}
                            exit={{ y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="search-form md:hidden"
                        >
                            <div className="search-form-div">
                                <div>
                                    <img
                                        src={'/icons/search.webp'}
                                        alt="Search Button"
                                        onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100x40?text=Search')}
                                    />
                                    <input
                                        id="search"
                                        type="text"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        name="search"
                                        placeholder="Search game..."
                                    />
                                </div>
                            </div>
                        </motion.nav>
                    )
                }

                <div className="search-form hidden md:block">
                    <div className="search-form-div">
                        <div>
                            <img
                                src={'/icons/search.webp'}
                                alt="Search Button"
                                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100x40?text=Search')}
                            />
                            <input
                                id="search"
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                name="search"
                                placeholder="Search game..."
                            />
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </>
    );
}

export default SearchForm