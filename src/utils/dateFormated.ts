export const dateFormated = (date: string, isLong?: boolean) => {
  const newDate = new Date(date)

  if (isLong) {
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(newDate)
  }

  return new Intl.DateTimeFormat('pt-BR', {
    month: 'short',
    year: 'numeric'
  }).format(newDate)
}
