export function formatDueDate(dateStr: string | null) {
  if (!dateStr) return null;
  const d = new Date(dateStr + 'T00:00:00');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diff = Math.round((d.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  if (diff < 0) return { text: `${-diff}日超過`, color: 'text-red-600' };
  if (diff === 0) return { text: '今日', color: 'text-amber-600' };
  if (diff === 1) return { text: '明日', color: 'text-blue-600' };
  if (diff <= 3) return { text: `${diff}日後`, color: 'text-blue-600' };
  return { text: `${diff}日後`, color: 'text-gray-600' };
}

export function formatCreated(iso: string) {
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
}
