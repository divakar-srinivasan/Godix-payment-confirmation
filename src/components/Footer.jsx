import { ArrowRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
                <div>
                    <p className="text-lg font-semibold text-white">© 2026 GODIX</p>
                    <p className="mt-2 text-sm text-slate-400">Professional software engineering training and mentorship.</p>
                </div>

                <div aria-label="Footer navigation" className="flex flex-wrap items-center gap-4 text-sm">
                    <Link to="/enrollment" className="transition-colors duration-200 hover:text-white">
                        Terms
                    </Link>
                    <Link to="/enrollment" className="transition-colors duration-200 hover:text-white">
                        Privacy
                    </Link>
                    <a href="#contact" className="transition-colors duration-200 hover:text-white">
                        Contact
                    </a>
                </div>

                <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/20"
                >
                    Contact us <ArrowRight size={16} />
                </a>
            </div>

            <div className="border-t border-white/10 px-4 py-4 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
                Made with <Heart size={14} className="mx-1 inline text-rose-400" /> by GODIX
            </div>
        </footer>
    )
}

export default Footer
