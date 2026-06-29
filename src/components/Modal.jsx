import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

export default function Modal({ isOpen, onClose, children, title }) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') onClose()
        }
        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown)
        }
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="max-h-[calc(100vh-3rem)] w-full max-w-6xl overflow-y-auto rounded-[2rem] bg-white p-6 shadow-2xl dark:bg-slate-900"
                onClick={(event) => event.stopPropagation()}
            >
                <div className="mb-6 flex items-center justify-between gap-4">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{title}</h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="rounded-full bg-slate-100 p-2 text-slate-700 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                    >
                        <FiX />
                    </button>
                </div>
                {children}
            </motion.div>
        </div>
    )
}
