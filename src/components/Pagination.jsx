export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1)

    return (
        <div className="flex flex-wrap items-center justify-center gap-3">
            <button
                type="button"
                aria-label="Previous page"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600 transition disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
                Previous
            </button>
            {pages.map((page) => (
                <button
                    key={page}
                    type="button"
                    onClick={() => onPageChange(page)}
                    className={`rounded-full px-4 py-2 text-sm transition ${page === currentPage ? 'bg-primary text-white' : 'border border-slate-200 bg-white text-slate-600 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'}`}
                >
                    {page}
                </button>
            ))}
            <button
                type="button"
                aria-label="Next page"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-600 transition disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
                Next
            </button>
        </div>
    )
}
