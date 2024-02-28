export function urlFormatter(
  search?: string,
  category?: string,
  country?: string
): string {
  const urlResult: string[] = [];
  if (search) {
    urlResult.push('q=' + search);
  }
  if (category) {
    urlResult.push('category=' + category);
  }
  if (country) {
    urlResult.push('country=' + country);
  }

  if (urlResult.length) {
    return urlResult.join('&');
  }

  return 'category=general';
}
