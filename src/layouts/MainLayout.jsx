import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaWhatsapp } from 'react-icons/fa'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-light text-dark dark:bg-slate-950 dark:text-slate-100">
            <Helmet>
                <title>Teknik Mebel Furniture</title>
                <meta
                    name="description"
                    content="Teknik Mebel Furniture is a custom furniture and interior company showcasing services, projects, customer reviews, and contact channels."
                />
            </Helmet>
            <Navbar />
            <main className="pt-28 transition-colors duration-300">
                <Outlet />
            </main>
            <Footer />
            <a
                href="https://wa.me/6282322953482"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Teknik Mebel Furniture on WhatsApp"
                className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition-transform duration-200 hover:scale-105"
            >
                <FaWhatsapp className="text-xl" />
                <span>WhatsApp</span>
            </a>
        </div>
    )
}
