export default function Nav() {
    return (
        <nav className="w-full h-16 bg-gray-800 text-white flex items-center justify-between px-4">
            <div className="text-lg font-bold">Gambling Ideas</div>
            <div className="space-x-4">
                <a href="/" className="hover:text-gray-400">Home</a>
                <a href="/devlogs" className="hover:text-gray-400">Devlogs</a>
            </div>
        </nav>
    );
}