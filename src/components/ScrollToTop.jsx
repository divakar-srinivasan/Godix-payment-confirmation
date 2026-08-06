import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function ScrollToTop() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const target = document.getElementById(hash.replace('#', ''))
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            return
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }, [pathname, hash])

    return null
}

export default ScrollToTop
