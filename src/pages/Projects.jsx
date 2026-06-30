import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import projectsData from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import ProjectModal from '../components/ProjectModal'
import Pagination from '../components/Pagination'
import usePagination from '../hooks/usePagination'

const categories = ['All', 'Kitchen Set', 'TV Backdrop', 'Wardrobe', 'Bed Frame', 'Interior', 'Custom Furniture']
const pageSize = 8

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All')
    const [currentPage, setCurrentPage] = useState(1)
    const [selectedProject, setSelectedProject] = useState(null)

    const filteredProjects = useMemo(() => {
        return activeCategory === 'All'
            ? projectsData
            : projectsData.filter((project) => project.category === activeCategory)
    }, [activeCategory])

    const totalPages = Math.max(1, Math.ceil(filteredProjects.length / pageSize))
    const projects = usePagination(filteredProjects, pageSize, currentPage)

    const handleCategoryChange = (category) => {
        setActiveCategory(category)
        setCurrentPage(1)
    }

    return (
        <div className="container space-y-16 bg-light py-20 dark:bg-slate-950">
            <section className="relative overflow-hidden rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center px-8 py-24 text-white">
                <div className="absolute inset-0 bg-slate-950/60" />
                <div className="container relative text-center">
                    <p className="text-sm uppercase tracking-[0.3em] text-secondary/90">Our Projects</p>
                    <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Jelajahi Proyek Kami</h1>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-100/90">Temukan proyek-proyek terbaru kami yang menunjukkan kualitas dan inovasi dalam desain interior.</p>
                </div>
            </section>

            <section className="container space-y-8">
                <div className="flex flex-wrap items-center gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => handleCategoryChange(category)}
                            className={`rounded-full px-5 py-2 text-sm font-medium transition ${category === activeCategory ? 'bg-primary text-white' : 'border border-slate-300 bg-white text-slate-700 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'}`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onView={setSelectedProject} />
                    ))}
                </div>

                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </section>

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    )
}
