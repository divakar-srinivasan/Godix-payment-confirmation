import { Link } from 'react-router-dom'
import banner from '../assets/brandname.png'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Terms & Conditions', href: '/enrollment' },
    { label: 'Contact', href: '#contact' },
]

function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-sm">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <Link to="/" className="flex items-center gap-3 rounded-full transition-transform duration-200 hover:scale-[1.02]">
                    <img
                        src={banner}
                        alt="GODIX logo"
                        className="h-10 w-auto object-contain sm:h-12"
                    />
                </Link>

                <nav aria-label="Primary navigation" className="flex items-center gap-2 text-sm font-medium text-slate-600 sm:gap-4 sm:text-base">
                    {navItems.map((item) => {
                        if (item.href.startsWith('#')) {
                            return (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="rounded-full px-3 py-2 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                                >
                                    {item.label}
                                </a>
                            )
                        }

                        return (
                            <Link
                                key={item.label}
                                to={item.href}
                                className="rounded-full px-3 py-2 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </header>
    )
}

export default Navbar
