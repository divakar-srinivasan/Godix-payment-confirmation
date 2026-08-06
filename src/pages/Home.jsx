import Hero from '../components/Hero'

function Home() {
    return (
        <div className="animate-[fadeIn_0.7s_ease-out]">
            <Hero />

            <section id="terms" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Student agreement</p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-900">Terms & Conditions</h2>
                    <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                        Review the full GODIX Student Agreement & Terms of Enrollment before proceeding. The agreement outlines the program structure, responsibilities, policies, and the registration process.
                    </p>
                    <a
                        href="/enrollment"
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                        Review Terms
                    </a>
                </div>
            </section>

            <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-10 sm:px-6 lg:px-8 lg:pb-16">
                <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm sm:p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Contact</p>
                    <h2 className="mt-3 text-3xl font-semibold">Enrollment support</h2>
                    <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                        Use the enrollment agreement page to complete the registration flow and continue to the official GODIX registration form.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default Home
