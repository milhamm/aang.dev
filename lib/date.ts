export function DateFormatter(dateString: string, locales: Intl.LocalesArgument = 'en-US') {
  const date = new Date(dateString)
  const longMonth = date.toLocaleString(locales, { month: 'long' })
  const shortMonth = date.toLocaleString(locales, { month: 'short' })

  function getFullFormat() {
    return `${longMonth} ${date.getDate()}, ${date.getFullYear()}`
  }

  function getShortFormat() {
    return `${shortMonth} ${date.getDate()}, ${date.getFullYear()}`
  }

  return {
    getFullFormat,
    getShortFormat,
  }
}
