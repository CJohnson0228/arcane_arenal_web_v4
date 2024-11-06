export function getInitials(displayName: string) {
  const firstName = getFirstName(displayName)
  const lastName = getLastName(displayName)
  const firstInitial = firstName.charAt(0).toUpperCase()
  const secondInitial = lastName.charAt(0).toUpperCase()
  return (firstInitial + secondInitial)
}

export function getFirstName(displayName: string) {
  const names = displayName.split(' ')
  const name = names[0]
  return name
}

export function getLastName(displayName: string) {
  const names = displayName.split(' ')
  const name = names[1]
  return name
}