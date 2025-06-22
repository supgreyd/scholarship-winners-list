import type { IScholarshipWinnerApiResponse } from "@models/scholarshipWinner";

export const useScholarshipWinners = (page: Ref<number>, limit: Ref<number>) => {
    const API_URL = '/api/proxyWinners'

    const cacheKey = computed(() => `winners-${page.value}-${limit.value}`)

    const {
        data,
        pending,
        error,
        refresh,
    } = useAsyncData<IScholarshipWinnerApiResponse>(
        cacheKey,
        () => $fetch(API_URL, {
            params: {
                'page[number]': page.value,
                'page[limit]': limit.value,
            }
        }),
        {
            watch: [page, limit]
        }
    )

    const winners = computed(() => data.value?.data || [])
    const totalItems = computed(() => data.value?.meta?.pagination?.total || 0)

    return { winners, totalItems, pending, error, refresh }
}
