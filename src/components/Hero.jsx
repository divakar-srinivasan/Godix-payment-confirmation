import { ArrowRight, BadgeCheck, ShieldCheck } from 'lucide-react'
import banner from '../assets/brandname.png'

function Hero() {
    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_80px_-30px_rgba(15,23,42,0.25)] sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-14">
                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
                        <BadgeCheck size={16} />
                        Trusted by ambitious learners
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                            GODIX Student Enrollment Portal
                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-slate-600">
                            Professional software engineering training and mentorship designed to help students move from learning to delivery with confidence.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a
                            href="/enrollment"
                            aria-label="Review the GODIX student agreement and terms"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                            Read Terms <ArrowRight size={16} />
                        </a>
                        <a
                            href="/enrollment"
                            aria-label="Continue to the GODIX enrollment registration form"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                            Enroll Now <ShieldCheck size={16} />
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-600">
                        <span className="rounded-full bg-slate-100 px-3 py-1">Modern curriculum</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1">Mentor-led support</span>
                        <span className="rounded-full bg-slate-100 px-3 py-1">Career-ready outcomes</span>
                    </div>
                </div>

                <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-4 shadow-inner sm:p-6">
                    <img
                        src={banner}
                        alt="GODIX enrollment banner"
                        loading="lazy"
                        decoding="async"
                        className="mx-auto h-auto w-full max-w-3xl rounded-[1.25rem] object-contain"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
