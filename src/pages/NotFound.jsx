import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
            <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">404</p>
                <h1 className="mt-3 text-3xl font-semibold text-slate-900">Page not found</h1>
                <p className="mt-4 text-slate-600">
                    The page you requested could not be found. Return to the home portal to continue.
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-flex rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700"
                >
                    Go Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound
