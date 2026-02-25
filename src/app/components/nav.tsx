export default function Nav() {
    return (
        <nav className="w-full h-16 justify-center text-white flex items-center absolute bottom-0 p-4 mb-4">
            <div className="w-1/2 flex bg-gray-800 items-center px-4 h-16 rounded-3xl justify-between">
                <div className="text-lg font-bold">Gambling Ideas</div>
                <div className="space-x-4">
                    <a href="/" className="hover:text-gray-400">Home</a>
                    <a href="/devlogs" className="hover:text-gray-400">Devlogs</a>
                </div>
            </div>
        </nav>
    );
}