import { useUserStore } from "../store/user-store";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
	const isFullscreen = useUserStore((state) => state.isFullscreen);

	if (isFullscreen) return null;

	return (
		<AnimatePresence>
			{
				!isFullscreen && (
					<motion.nav
						initial={{ y: -100 }}
						animate={{ y: 0 }}
						exit={{ y: -100 }}
						transition={{ duration: 0.3 }}
						className="navbar"
					>
						<nav>
							<img
								src="/game-icons/fun88.webp"
								alt="FUN88 Icon"
							/>
						</nav>
					</motion.nav>
				)
			}
		</AnimatePresence>
	);
}

export default Navbar