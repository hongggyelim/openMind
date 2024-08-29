export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMs = now - date;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInDays < 1) {
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
      if (diffInMinutes < 1) {
        return '방금 전';
      }
      return `${diffInMinutes}분 전`;
    }
    return `${diffInHours}시간 전`;
  }
  return `${diffInDays}일 전`;
}
