import { H3Event, sendError } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
    try {
        const query = getQuery(event)

        const url = new URL('https://scholarshipowl.com/jsonapi/winner')
        url.searchParams.set('page[number]', String(query['page[number]'] || '1'))
        url.searchParams.set('page[limit]', String( query['page[limit]'] || '10'))

        const response = await fetch(url.toString())

        if (!response.ok) {
            return sendError(event, createError({
                statusCode: response.status,
                statusMessage: `Failed to fetch data: ${response.statusText}`
            }))
        }

        return await response.json()

    } catch (err) {
        return sendError(event, createError({
            statusCode: 500,
            statusMessage: `Server error: ${err instanceof Error ? err.message : String(err)}`
        }))
    }
})
