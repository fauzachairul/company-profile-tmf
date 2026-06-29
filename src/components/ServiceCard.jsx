export default function ServiceCard({ service }) {
    return (
        <article className="card group overflow-hidden rounded-[1.25rem] bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900">
            <div className="mb-5 h-14 w-14 rounded-3xl bg-primary/10 text-primary flex items-center justify-center text-2xl">
                <span>{service.title[0]}</span>
            </div>
            <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100">{service.title}</h3>
            <p className="text-slate-600 dark:text-slate-400">{service.description}</p>
            <img
                src={service.image}
                alt={service.title}
                className="mt-6 h-48 w-full rounded-[1.25rem] object-cover transition duration-500 group-hover:scale-105"
            />
        </article>
    )
}
