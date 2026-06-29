export default function ProjectCard({ project, onView }) {
    return (
        <article className="group overflow-hidden rounded-[1.25rem] bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900">
            <div className="overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>
            <div className="space-y-3 p-6">
                <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-primary">
                    <span>{project.category}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{project.location}</p>
                <button
                    type="button"
                    onClick={() => onView(project)}
                    className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary"
                >
                    View Detail
                </button>
            </div>
        </article>
    )
}
