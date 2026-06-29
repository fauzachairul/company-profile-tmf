import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope, FaRegClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
            <div className="container grid gap-10 lg:grid-cols-4">
                <div className="space-y-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary text-lg font-semibold">
                        TM
                    </div>
                    <p className="max-w-md text-slate-600 dark:text-slate-400">
                        Teknik Mebel Furniture adalah perusahaan furnitur dan interior custom yang menyediakan layanan desain dan pembuatan berkualitas premium untuk rumah dan bisnis.
                    </p>
                    <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                        <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" /> Jl. Wadas Lintang - Kertek No.9, Balekambang, Kec. Selomerto, Kabupaten Wonosobo, Jawa Tengah 56361</p>
                        <p className="flex items-center gap-2"><FaWhatsapp className="text-primary" /> +62 823-2295-3482</p>
                        <p className="flex items-center gap-2"><FaEnvelope className="text-primary" /> info@teknikmebel.id</p>
                        <p className="flex items-center gap-2"><FaRegClock className="text-primary" /> Mon - Sat, 08:00 - 18:00</p>
                    </div>
                </div>

                <div>
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 dark:text-slate-100">Quick Links</p>
                    <div className="grid gap-3 text-slate-600 dark:text-slate-400">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <p className="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-slate-900 dark:text-slate-100">Stay connected</p>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400">
                        Ikuti Teknik Mebel Furniture di media sosial untuk mendapatkan update proyek terbaru, inspirasi desain furniture, serta cerita dan testimoni pelanggan.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3 text-sm">
                        <a href="#" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200">Instagram</a>
                        <a href="https://wa.me/6282322953482" target="_blank" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200">WhatsApp</a>
                        <a href="#" className="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200">Facebook</a>
                    </div>
                </div>
            </div>
            <div className="container mt-12 border-t border-slate-200 pt-8 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                © 2026 Teknik Mebel Furniture. All rights reserved.
            </div>
        </footer>
    )
}
