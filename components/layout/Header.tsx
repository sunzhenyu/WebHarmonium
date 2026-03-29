import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            Web Harmonium
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/harmonium" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Play
            </Link>
            <Link href="/tutorial" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tutorial
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
