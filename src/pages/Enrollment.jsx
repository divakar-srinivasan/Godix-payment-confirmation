import { useEffect, useRef, useState } from 'react'
import {
    AlertTriangle,
    ArrowLeft,
    ArrowRight,
    Award,
    BookOpenCheck,
    BriefcaseBusiness,
    CalendarDays,
    CheckCircle2,
    CircleDollarSign,
    Compass,
    FileText,
    Lock,
    RefreshCw,
    ShieldCheck,
    Users,
} from 'lucide-react'

const FORM_URL = 'https://forms.gle/c3TeFaAzc2JEffxt7'

const termSections = [
    {
        icon: ShieldCheck,
        title: 'About GODIX',
        content:
            'GODIX is a software engineering training and mentorship platform focused on helping participants develop practical, industry-relevant technical skills through structured learning, hands-on projects, mentorship, and career guidance.',
    },
    {
        icon: BookOpenCheck,
        title: 'Program Nature',
        content:
            'GODIX provides professional software engineering training and mentorship for educational and skill development purposes. The curriculum may be updated periodically to reflect current industry practices and improve the learning experience.',
    },
    {
        icon: FileText,
        title: 'Enrollment',
        content:
            'Enrollment is confirmed only after successful fee payment and acceptance of these Terms & Conditions. Participants are responsible for providing accurate information during registration.',
    },
    {
        icon: Users,
        title: 'Attendance & Participation',
        content:
            'Participants are expected to attend training sessions, complete assignments, participate in projects, and maintain professional conduct throughout the program. Learning outcomes depend on individual attendance, consistency, practice, and participation.',
    },
    {
        icon: CalendarDays,
        title: 'Training Schedule',
        content:
            'Training schedules, curriculum, session timings, and learning activities may be updated whenever reasonably necessary. Selected review sessions, guest sessions, and special activities will be conducted based on mentor availability and program requirements.',
    },
    {
        icon: BriefcaseBusiness,
        title: 'Projects & Assignments',
        content:
            'Participants are expected to complete assigned coding exercises, assignments, and projects within the specified timelines. Project quality and completion depend on each participant\'s individual effort.',
    },
    {
        icon: Compass,
        title: 'Career Guidance',
        content:
            'GODIX may provide resume reviews, LinkedIn profile reviews, GitHub profile reviews, mock interviews, career guidance, and off-campus job application guidance. Internships, interviews, employment opportunities, salaries, placements, and certifications are not guaranteed and remain solely at the discretion of recruiting organizations.',
    },
    {
        icon: Award,
        title: 'Certificates',
        content:
            'A Training Completion Certificate may be issued to participants who successfully complete the program requirements determined by GODIX. Participants who discontinue the program or fail to satisfy the completion requirements will not be eligible for a Training Completion Certificate.',
    },
    {
        icon: CircleDollarSign,
        title: 'Refund & Cancellation Policy',
        content:
            'All program fees are non-refundable after enrollment confirmation. Training resources, mentor allocation, administrative efforts, and reserved batch capacity are planned immediately upon enrollment. Participants may discontinue the program at any time; however, no refund, whether full or partial, will be provided.',
    },
    {
        icon: ShieldCheck,
        title: 'Code of Conduct',
        content:
            'Participants are expected to maintain respectful and professional behaviour throughout the training program. GODIX reserves the right to suspend or remove participants whose behaviour significantly disrupts the learning environment or violates these policies.',
    },
    {
        icon: Lock,
        title: 'Intellectual Property',
        content:
            'All training materials, presentations, recordings, documents, assignments, templates, source code, and learning resources provided by GODIX remain the intellectual property of GODIX unless otherwise stated. Participants shall not copy, distribute, publish, record, sell, or share any training materials without prior written permission from GODIX.',
    },
    {
        icon: Lock,
        title: 'Privacy',
        content:
            'Participant information collected during registration will be used only for enrollment, communication, training administration, certification, and program management.',
    },
    {
        icon: AlertTriangle,
        title: 'Limitation of Liability',
        content:
            'GODIX shall not be responsible for employment decisions, internship selections, interview outcomes, salary offers, academic results, or any indirect or consequential loss arising from participation in the training program.',
    },
    {
        icon: RefreshCw,
        title: 'Policy Updates',
        content:
            'GODIX reserves the right to update these policies, curriculum, schedules, or training structure whenever reasonably necessary.',
    },
    {
        icon: CheckCircle2,
        title: 'Acceptance',
        content:
            'By continuing to the registration form, participants confirm that they have read, understood, and agreed to these Terms & Conditions.',
    },
]

function SectionCard({ icon: Icon, title, content }) {
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:p-7">
            <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon size={20} />
                </div>
                <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 sm:text-[15px]">{content}</p>
                </div>
            </div>
        </article>
    )
}

function Enrollment() {
    const [agreed, setAgreed] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [readingProgress, setReadingProgress] = useState(0)
    const termsRef = useRef(null)

    useEffect(() => {
        const updateProgress = () => {
            const container = termsRef.current
            if (!container) return

            const topOffset = container.getBoundingClientRect().top
            const containerHeight = container.offsetHeight
            const viewportHeight = window.innerHeight
            const maxScroll = Math.max(1, containerHeight - viewportHeight + 160)
            const progress = Math.min(100, Math.max(0, ((160 - topOffset) / maxScroll) * 100))
            setReadingProgress(Math.round(progress))
        }

        updateProgress()
        window.addEventListener('scroll', updateProgress, { passive: true })
        window.addEventListener('resize', updateProgress)

        return () => {
            window.removeEventListener('scroll', updateProgress)
            window.removeEventListener('resize', updateProgress)
        }
    }, [])

    const handleContinue = () => {
        if (!agreed) return
        setShowModal(true)
    }

    const confirmRedirect = () => {
        window.open(FORM_URL, '_blank', 'noopener,noreferrer')
        setShowModal(false)
    }

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur-sm">
                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between text-sm font-medium text-slate-600">
                        <span>Reading progress</span>
                        <span>{readingProgress}%</span>
                    </div>
                    <div
                        className="h-2 overflow-hidden rounded-full bg-slate-200"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={readingProgress}
                        aria-valuetext={`${readingProgress}% of the terms read`}
                    >
                        <div
                            className="h-full rounded-full bg-linear-to-r from-blue-600 to-indigo-600 transition-all duration-300"
                            style={{ width: `${readingProgress}%` }}
                        />
                    </div>
                </div>
            </div>

            <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
                <div className="mx-auto max-w-7xl space-y-8">
                    <div className="rounded-4xl border border-slate-200 bg-white p-8 shadow-[0_20px_80px_-35px_rgba(15,23,42,0.25)] sm:p-10 lg:p-14">
                        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">
                            <CheckCircle2 size={16} />
                            Enrollment agreement
                        </div>
                        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Student Agreement & Terms of Enrollment
                        </h1>
                        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                            Please read the following terms carefully before proceeding with your registration. Your acceptance confirms that you understand the program expectations and policies.
                        </p>
                    </div>

                    <div ref={termsRef} className="space-y-6">
                        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6 shadow-sm sm:p-7">
                            <div className="flex items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
                                    <CircleDollarSign size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-slate-900">Refund & Cancellation Policy</h2>
                                    <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
                                        All program fees are non-refundable after enrollment confirmation. Training resources, mentor allocation, administrative efforts, and reserved batch capacity are planned immediately upon enrollment. Participants may discontinue the program at any time; however, no refund, whether full or partial, will be provided.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 shadow-sm sm:p-7">
                            <div className="flex items-start gap-3">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                                    <AlertTriangle size={20} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-slate-900">Disclaimer</h2>
                                    <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-[15px]">
                                        Participation in the GODIX Software Engineering Training & Mentorship Program provides an opportunity to develop technical knowledge and practical skills. Individual outcomes depend on attendance, commitment, practice, communication skills, technical ability, market conditions, and employer hiring criteria. Nothing in this program shall be interpreted as a guarantee of employment, internship opportunities, interviews, salary, placement, certification, or any specific career outcome.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {termSections.map((section) => (
                            <SectionCard key={section.title} {...section} />
                        ))}
                    </div>

                    <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                        <div className="flex items-start gap-3">
                            <input
                                id="agreement"
                                type="checkbox"
                                checked={agreed}
                                onChange={(event) => setAgreed(event.target.checked)}
                                className="mt-1 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                            />
                            <label htmlFor="agreement" className="text-base leading-8 text-slate-700 sm:text-lg">
                                I have read, understood, and agree to the GODIX Student Agreement & Terms of Enrollment.
                            </label>
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <a
                                href="/"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-600"
                            >
                                <ArrowLeft size={16} />
                                Back to Home
                            </a>

                            <button
                                type="button"
                                onClick={handleContinue}
                                disabled={!agreed}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                            >
                                Continue to Registration
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {showModal ? (
                <div className="fixed inset-0 z-60 flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        className="w-full max-w-lg rounded-4xl border border-slate-200 bg-white p-8 shadow-2xl"
                    >
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600">Continue to Registration</p>
                        <h2 id="modal-title" className="mt-3 text-2xl font-semibold text-slate-900">You are about to leave the GODIX website.</h2>
                        <p id="modal-description" className="mt-4 text-base leading-8 text-slate-600">
                            You are about to leave the GODIX website and continue to the official registration form. Please ensure that you have completed the payment process before submitting the registration form.
                        </p>
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                className="rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:border-blue-200 hover:text-blue-600"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={confirmRedirect}
                                className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Enrollment
