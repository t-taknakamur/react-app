import dayjs from "dayjs";

export function formatDate(dateString: string | null | undefined) {
    if (!dateString) return ''

    return dayjs(dateString).format('YYYY-M-D h:m:s')
}
