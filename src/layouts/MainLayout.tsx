import { useEffect, type ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useGameStore } from '../store/game-store';
import { useUserStore } from '../store/user-store';
import BottomBar from './BottomBar';
import { CloseExpandIcon } from '../assets/Icons';

const MainLayout = ({ children }: { children: ReactNode }) => {
    const { fetchGames, fetchCategories, fetchBanners, fetchProviders } = useGameStore();
    const isFullscreen = useUserStore(state => state.isFullscreen);

    useEffect(() => {
        fetchGames();
        fetchCategories();
        fetchBanners();
        fetchProviders();
    }, []);

    return (
        <div className="main-layout">
            <header>
                <Navbar />
            </header>

            <div className="main-layout-content">
                <main>
                    <div className="children">
                        {children}
                    </div>
                    <Footer />
                    <BottomBar />

                    {isFullscreen && (
                        <button
                            onClick={() => useUserStore.getState().toggleFullscreen()}
                            className="close-expand"
                        >
                           <CloseExpandIcon />
                        </button>
                    )}
                </main>
            </div>
        </div>
    );
};

export default MainLayout;