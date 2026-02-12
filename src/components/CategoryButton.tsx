import { useGameStore } from "../store/game-store"

const CategoryButton = ({ label, img }: { label: string, img: string }) => {
    const { activeCategory, setActiveCategory } = useGameStore()
    return (
        <button
            key={label}
            style={{ backgroundColor: `${ activeCategory === label ? '#E6E6F2' : 'white' }`, minWidth: '50px' }}
            onClick={() => setActiveCategory(label)}
        >
            <img
                src={img}
                alt={label}
                className="h-6 object-contain"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100x40?text=' + label)}
            />
            <span className="text-slate-400 font-medium text-xs">
                {label}
            </span>
        </button>
    )
}

export default CategoryButton