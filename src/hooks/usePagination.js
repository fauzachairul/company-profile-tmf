import { useMemo } from 'react'

export default function usePagination(items, pageSize, currentPage) {
    return useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize
        return items.slice(startIndex, startIndex + pageSize)
    }, [items, pageSize, currentPage])
}
