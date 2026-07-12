import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import services from '../data/services'
import reviews from '../data/reviews'
import ServiceCard from '../components/ServiceCard'
import ReviewCard from '../components/ReviewCard'

export default function Home() {
    return (
        <div className="bg-light py-20 dark:bg-slate-950">
            <section className="container grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-primary">Teknik Mebel Furniture</p>
                    <h1 className="max-w-2xl text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">Layanan Furniture custom dan desain interior modern untuk rumah dan bisnis yang estetik dan fungsional.</h1>
                    <p className="max-w-xl text-slate-600 dark:text-slate-300">Hidupkan ruang Anda dengan kitchen set premium, lemari, backdrop TV, dan solusi interior custom yang berkualitas.</p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/projects" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition hover:bg-secondary">
                            View Projects
                        </Link>
                        <Link to="/contact" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3 text-sm font-semibold text-slate-800 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
                    <img
                        src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
                        alt="Crafted furniture interior"
                        className="h-[440px] w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <p className="text-sm uppercase tracking-[0.3em] text-secondary">Workshop</p>
                        <h2 className="mt-2 text-3xl font-semibold">Mengutamakan kualitas pengerjaan di setiap detail.</h2>
                        <p className="mt-3 max-w-md text-sm text-slate-200">Dari kitchen set hingga furniture custom, proses kami membawa keindahan dan presisi ke dalam setiap proyek.</p>
                    </div>
                </div>
            </section>

            <section className="container mt-20 space-y-8">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-primary">Our Services</p>
                        <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">Layanan Kami</h2>
                    </div>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400">Jelajahi layanan kami untuk kitchen set custom, lemari, backdrop TV, tempat tidur, interior, dan furniture custom.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </section>

            <section className="container mt-20 space-y-8">
                <div className="space-y-3">
                    <p className="text-sm uppercase tracking-[0.24em] text-primary">Apa Kata Mereka</p>
                    <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">Ulasan Pelanggan</h2>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            </section>
        </div>
    )
}
