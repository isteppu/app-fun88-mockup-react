import { useEffect, type ReactNode } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useGameStore } from '../store/game-store';

const MainLayout = ({ children }: { children: ReactNode }) => {
    const { fetchGames, fetchCategories, fetchBanners} = useGameStore();

    useEffect(() => {
        fetchGames();
        fetchCategories();
        fetchBanners();
    }, [fetchGames, fetchBanners, fetchCategories]);

    return (
        <div className="flex flex-col min-h-screen bg-white text-slate-900">
            <header className="sticky top-0 z-50">
                <Navbar />
            </header>

            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 flex flex-col overflow-x-hidden">
                    <div className="p-4 md:p-6 lg:p-8 bg-white">
                        {children}
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
};

export default MainLayout;