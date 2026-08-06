import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

function Layout() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <Navbar />
            <main id="main-content" tabIndex="-1" className="pb-10">
                <Outlet />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

export default Layout
