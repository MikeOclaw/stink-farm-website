import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-near-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-white rounded-full overflow-hidden border-2 border-hay-gold">
                <Image
                  src="/images/logo/Stink Farm Logo.png"
                  alt="Stink Farm logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-headline text-2xl text-hay-gold">Stink Farm</span>
            </div>
            <p className="font-body text-gray-400 text-sm leading-relaxed">
              The hilarious bluffing card game for the whole farmyard. Outbluff your family, because losing stinks!
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-headline text-xl text-hay-gold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/how-to-play" className="text-gray-400 hover:text-white transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/buy" className="text-gray-400 hover:text-white transition-colors">
                  Buy the Game
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-headline text-xl text-hay-gold mb-4">Legal</h3>
            <ul className="space-y-2 font-body text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-gray-400 text-sm font-body">Questions?</p>
              <a
                href="mailto:hello@stinkfarmgame.com"
                className="text-hay-gold hover:text-white transition-colors text-sm font-body"
              >
                hello@stinkfarmgame.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-gray-500 text-sm">
            © {new Date().getFullYear()} Stink Farm. All rights reserved.
          </p>
          <p className="font-body text-gray-500 text-sm">
            Ages 6–100 | 2–6 Players | 15–30 min
          </p>
        </div>
      </div>
    </footer>
  );
}
