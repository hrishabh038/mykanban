export function getInitials(fullname: string): string {
  const words = fullname.trim().split(/\s+/);

  if (words.length === 1) {
    // Single word → return first 2 letters
    return words[0].slice(0, 2).toUpperCase();
  }

  // Multiple words → first letter of first word + first letter of last word
  return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}
