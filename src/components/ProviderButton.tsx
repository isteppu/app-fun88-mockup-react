import { useGameStore } from "../store/game-store"

const ProviderButton = ({ provider, count }: { provider: string, count: number }) => {
    const { activeProvider, setActiveProvider } = useGameStore()
    return (
        <button
            key={provider}
            className="provider-button"
            style={{ backgroundColor: `${activeProvider === provider ? '#E6E6F2': '#F2F2F7' }`, minWidth: '120px' }}
            onClick={() => setActiveProvider(provider)}
        >
            <img
                src={'/providers/' + provider + '.webp'}
                alt={provider}
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100x40?text=' + provider)}
            />
            <span>
                ({count})
            </span>
        </button>
    )
}

export default ProviderButton