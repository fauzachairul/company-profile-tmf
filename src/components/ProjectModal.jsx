import { motion } from 'framer-motion'
import Modal from './Modal'

export default function ProjectModal({ project, onClose }) {
    if (!project) return null

    return (
        <Modal isOpen={Boolean(project)} onClose={onClose} title={project.title}>
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                    <img src={project.image} alt={project.title} className="h-[360px] w-full rounded-[1.5rem] object-cover shadow-soft" />
                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] bg-slate-50 p-5 dark:bg-slate-800">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Category</p>
                            <p className="mt-2 font-semibold text-slate-900 dark:text-white">{project.category}</p>
                        </div>
                        <div className="rounded-[1.5rem] bg-slate-50 p-5 dark:bg-slate-800">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
                            <p className="mt-2 font-semibold text-slate-900 dark:text-white">{project.location}</p>
                        </div>
                        <div className="rounded-[1.5rem] bg-slate-50 p-5 dark:bg-slate-800">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Completion</p>
                            <p className="mt-2 font-semibold text-slate-900 dark:text-white">{project.completionDate}</p>
                        </div>
                        <div className="rounded-[1.5rem] bg-slate-50 p-5 dark:bg-slate-800">
                            <p className="text-sm text-slate-500 dark:text-slate-400">Area</p>
                            <p className="mt-2 font-semibold text-slate-900 dark:text-white">{project.area} m²</p>
                        </div>
                    </div>
                    <div className="space-y-4 rounded-[1.5rem] bg-slate-50 p-6 dark:bg-slate-800">
                        <p className="text-slate-600 dark:text-slate-400">{project.description}</p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Materials Used</p>
                                <p className="mt-1 font-medium text-slate-900 dark:text-white">{project.materials}</p>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Work Duration</p>
                                <p className="mt-1 font-medium text-slate-900 dark:text-white">{project.duration}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-[1.5rem] bg-slate-50 p-6 dark:bg-slate-800">
                            <h4 className="font-semibold text-slate-900 dark:text-white">Challenges</h4>
                            <p className="mt-3 text-slate-600 dark:text-slate-400">{project.challenges}</p>
                        </div>
                        <div className="rounded-[1.5rem] bg-slate-50 p-6 dark:bg-slate-800">
                            <h4 className="font-semibold text-slate-900 dark:text-white">Solutions</h4>
                            <p className="mt-3 text-slate-600 dark:text-slate-400">{project.solutions}</p>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="rounded-[1.5rem] bg-slate-50 p-6 dark:bg-slate-800">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Project Gallery</h4>
                        <div className="mt-5 grid gap-4">
                            {project.gallery.map((image, index) => (
                                <img key={index} src={image} alt={`${project.title} gallery ${index + 1}`} className="h-40 w-full rounded-[1.25rem] object-cover" />
                            ))}
                        </div>
                    </div>
                    <div className="rounded-[1.5rem] bg-slate-50 p-6 dark:bg-slate-800">
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-white">Project Details</h4>
                        <div className="mt-5 space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <p><span className="font-semibold text-slate-900 dark:text-white">Client Type:</span> {project.clientType}</p>
                            <p><span className="font-semibold text-slate-900 dark:text-white">Location:</span> {project.location}</p>
                            <p><span className="font-semibold text-slate-900 dark:text-white">Category:</span> {project.category}</p>
                            <p><span className="font-semibold text-slate-900 dark:text-white">Area:</span> {project.area} m²</p>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
