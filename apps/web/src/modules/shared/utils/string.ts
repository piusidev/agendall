export function getNameInitials(name: string) {
  return name
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase())
    .join('')
}
