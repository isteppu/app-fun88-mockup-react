const ProviderButton = ({ provider, count }: { provider: string, count: number }) => {
    return (
        <button
            key={provider}
            className="shrink-0 flex items-center justify-between gap-4 px-4 py-3 bg-neutral-100 border border-slate-100 rounded-xl hover:shadow-md hover:border-blue-200 transition-all min-w-180px"
        >
            <img
                src={'/providers/' + provider + '.webp'}
                alt={provider}
                className="h-6 object-contain transition-all"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100x40?text=' + provider)}
            />
            <span className="text-slate-400 font-medium text-lg">
                ({count})
            </span>
        </button>
    )
}

export default ProviderButton