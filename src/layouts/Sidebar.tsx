const Sidebar = () => (
    <aside className="hidden md:flex flex-col w-64 bg-slate-50 text-slate-700 border-r border-slate-200">
        <div className="p-4 space-y-4">
            <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            <div className="h-4 bg-slate-200 rounded w-1/2"></div>
            <div className="h-4 bg-slate-200 rounded w-5/8"></div>
        </div>
    </aside>
);

export default Sidebar;