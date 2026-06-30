import team from '../data/team'
import { motion } from 'framer-motion'
import TeamCard from '../components/TeamCard'

export default function About() {
    return (
        <div className="container space-y-16 bg-light py-20 dark:bg-slate-950">
            <section className="relative overflow-hidden rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center px-8 py-24 text-white">
                <div className="absolute inset-0 bg-slate-950/60" />
                <div className="container relative text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-secondary/90">About Us</p>
                    <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Sejarah Perusahaan dan Misi</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-100/90">Teknik Mebel Furniture menyediakan jasa interior dan furniture custom berkualitas untuk rumah, kantor, dan ruang usaha dengan desain fungsional, modern, dan tahan lama.</p>
                    <p className="mt-4 text-sm uppercase tracking-[0.3em] text-secondary/90">Home & Interior Specialist</p>
                </div>
            </section>

            <section className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <img
                        src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80"
                        alt="Company story"
                        className="rounded-[2rem] object-cover shadow-soft"
                    />
                </motion.div>
                <div className="space-y-6">
                    <p className="text-sm uppercase tracking-[0.24em] text-primary">Komitmen Kami</p>
                    <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">Mengutamakan Kualitas dan Kepuasan Pelanggan</h2>
                    <p className="text-slate-600 dark:text-slate-400">Kami berkomitmen untuk memberikan produk dan layanan terbaik kepada pelanggan kami dengan fokus pada kualitas, kepuasan, dan kepercayaan.</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] bg-white p-6 shadow-soft dark:bg-slate-900">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Tahun Pengalaman</h3>
                            <p className="mt-3 text-slate-600 dark:text-slate-400">Lebih dari satu dekade dalam menghadirkan solusi kabinet, lemari, dan proyek interior lengkap di seluruh Indonesia.</p>
                        </div>
                        <div className="rounded-[1.5rem] bg-white p-6 shadow-soft dark:bg-slate-900">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Kualitas Terdepan</h3>
                            <p className="mt-3 text-slate-600 dark:text-slate-400">Setiap proyek dibangun dengan bahan tahan lama, finishing ahli, dan pengalaman pengguna yang dipikirkan .</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container space-y-10">
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-white p-8 shadow-soft dark:bg-slate-900">
                        <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Vision</h3>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">Menjadi mitra pilihan untuk solusi furnitur dan interior yang meningkatkan rumah dan tempat kerja di seluruh Indonesia.</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-white p-8 shadow-soft dark:bg-slate-900">
                        <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">Mission</h3>
                        <p className="mt-4 text-slate-600 dark:text-slate-400">Menyediakan furnitur yang disesuaikan, mendukung klien di setiap langkah, dan menciptakan ruang yang terasa indah, fungsional, dan tahan lama.</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-primary">Our Team</p>
                    <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">Pengembang Terbaik di Setiap Proyek</h2>
                    <p className="max-w-2xl text-slate-600 dark:text-slate-400">Tim kami terdiri dari profesional berpengalaman yang berdedikasi untuk memberikan layanan terbaik dalam desain dan produksi furnitur serta interior.</p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {team.map((member) => (
                        <TeamCard key={member.id} member={member} />
                    ))}
                </div>
            </section>
        </div>
    )
}
