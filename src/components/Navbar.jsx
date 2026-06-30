import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [darkMode, setDarkMode] = useState(() => {
        if (typeof window === 'undefined') return false

        const storedTheme = window.localStorage.getItem('theme')
        if (storedTheme === 'dark') return true
        if (storedTheme === 'light') return false

        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    useEffect(() => {
        const handler = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handler)
        return () => window.removeEventListener('scroll', handler)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle('dark', darkMode)
        window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
    }, [darkMode])

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-soft bg-white/90 backdrop-blur-xl dark:bg-slate-950/90' : 'bg-transparent'} `}>
            <div className="container flex h-20 items-center justify-between gap-4">
                <Link to="/" className="flex items-center gap-3 text-dark dark:text-slate-100">
                    <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-semibold shadow-sm">
                        TM
                    </div>
                    <div>
                        <p className="text-sm font-medium">Teknik Mebel</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Furniture Studio</p>
                    </div>
                </Link>

                <nav className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `text-sm font-medium transition ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary dark:text-slate-300'}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setDarkMode((value) => !value)}
                        className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-600 shadow-sm transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
                        aria-label="Toggle dark mode"
                    >
                        {darkMode ? <FiSun /> : <FiMoon />}
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsOpen((value) => !value)}
                        className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 p-2 text-slate-600 shadow-sm transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200 md:hidden"
                        aria-label="Open menu"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="border-t border-slate-200 bg-white/95 py-4 shadow-lg dark:border-slate-700 dark:bg-slate-950/95 md:hidden">
                    <div className="container flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition ${isActive ? 'text-primary' : 'text-slate-600 hover:text-primary dark:text-slate-300'}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
