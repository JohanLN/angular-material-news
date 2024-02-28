export function compareArticleDateFromNow(articleDate: string) {
  const dateDifference = new Date().getTime() - new Date(articleDate).getTime();

  const minsDifference = Math.floor(dateDifference / (1000 * 60));

  if (minsDifference < 60) {
    return `${minsDifference} mins${minsDifference > 1 ? 's' : ''} ago`;
  } else {
    const hoursDifference = Math.floor(minsDifference / 60);

    if (hoursDifference < 24) {
      return `${hoursDifference} hour${hoursDifference > 1 ? 's' : ''} ago`;
    } else {
      const daysDifference = Math.floor(hoursDifference / 24);

      return `${daysDifference} day${daysDifference > 1 ? 's' : ''} ago`;
    }
  }
}

export function stringDateToFormatedDate(articleDate: string) {
  const date = new Date(articleDate);

  return [
    String(date.getDate()),
    String(date.getMonth()),
    String(date.getFullYear()),
  ].join('/');
}
