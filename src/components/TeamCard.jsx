export default function TeamCard({ member }) {
    return (
        <article className="card overflow-hidden rounded-[1.25rem] bg-white p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900">
            <img src={member.photo} alt={member.name} className="mx-auto mb-5 h-40 w-40 rounded-full object-cover" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{member.name}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{member.position}</p>
        </article>
    )
}
