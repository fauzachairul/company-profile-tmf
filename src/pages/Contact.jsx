import ContactForm from '../components/ContactForm'

export default function Contact() {
    return (
        <div className="bg-light py-20 dark:bg-slate-950">
            <section className="container space-y-6">
                <div className="rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center p-16 text-white shadow-soft">
                    <div className="bg-slate-950/60 p-10 rounded-[2rem]">
                        <p className="text-sm uppercase tracking-[0.3em] text-secondary/90">Contact Us</p>
                        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Hubungi Kami untuk Proyek Furnitur Anda</h1>
                    </div>
                </div>

                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                    <ContactForm />
                    <div className="rounded-[1.5rem] bg-white p-8 shadow-soft dark:bg-slate-900">
                        <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">Temukan Kami di Peta</h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">Kunjungi kantor kami atau gunakan peta untuk menjadwalkan janji konsultasi.</p>
                        <div className="mt-8 aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-slate-200 dark:border-slate-700">
                            <iframe
                                title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.3035304902137!2d109.90769399999999!3d-7.4316252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aa307ec381f31%3A0x96f101486eaf044f!2sTeknik%20mebel%20furniture!5e0!3m2!1sid!2sid!4v1782700238938!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                className="border-0"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
