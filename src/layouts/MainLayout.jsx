import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
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
        </div>
    )
}
