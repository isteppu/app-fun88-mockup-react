const CategoryButton = ({ label, img }: { label: string, img: string }) => {
    return (
        <button
            key={label}
            className="shrink-0 flex flex-col items-center justify-between gap-1 px-3 py-3 bg-white transition-all min-w-180px"
        >
            <img
                src={img}
                alt={label}
                className="h-6 object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/100x40?text=' + label)}
            />
            <span className="text-slate-400 font-medium text-xs">
                {label}
            </span>
        </button>
    )
}

export default CategoryButton