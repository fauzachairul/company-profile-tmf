export default function ReviewCard({ review }) {
    return (
        <div className="card rounded-[1.25rem] bg-white p-6 shadow-soft dark:bg-slate-900">
            <div className="flex items-center gap-4">
                <img src={review.photo} alt={review.name} className="h-14 w-14 rounded-full object-cover" />
                <div>
                    <p className="font-semibold text-slate-900 dark:text-slate-100">{review.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{review.role}</p>
                </div>
            </div>
            <div className="mt-4 flex items-center gap-1 text-amber-400">
                {Array.from({ length: review.rating }).map((_, index) => (
                    <span key={index}>★</span>
                ))}
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-400">{review.testimonial}</p>
        </div>
    )
}
