export function getDateEntries(limit: number): string[] {
  const currTs = Date.now()
  const dates: string[] = []

  for (let i = 0; i < limit; i++) {
    const date = new Date(currTs)
    date.setDate(date.getDate() - i)
    date.setHours(0, 0, 0, 0)
    dates.push(getDateString(date))
  }

  return dates
}

export function getNextDay(dateStr: string): Date {
  const date = new Date(dateStr)
  date.setDate(date.getDate() + 1)
  return date
}

export function getPrevDay(dateStr: string): Date {
  const date = new Date(dateStr)
  date.setDate(date.getDate() - 1)
  return date
}

export function getDateString(date: Date): string {
  return date.toISOString().slice(0, 10)
}

export function getPrevDayString(dateStr: string): string {
  return getDateString(getPrevDay(dateStr))
}

export function getLatestDate(dates: string[]): string {
  return dates.reduce((prev, curr) =>
    new Date(prev) > new Date(curr) ? prev : curr
  )
}
