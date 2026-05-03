'use client';

interface Props {
  input: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  onInputChange: (value: string) => void;
  onPriorityChange: (value: 'high' | 'medium' | 'low') => void;
  onDueDateChange: (value: string) => void;
  onAdd: () => void;
}

export default function TodoForm({
  input,
  priority,
  dueDate,
  onInputChange,
  onPriorityChange,
  onDueDateChange,
  onAdd,
}: Props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={e => onInputChange(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && onAdd()}
          placeholder="新しいタスクを入力..."
          className="flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-600 focus:outline-none"
        />
        <button
          onClick={onAdd}
          className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg font-semibold hover:shadow-md transition"
        >
          + 追加
        </button>
      </div>
      <div className="flex gap-4 flex-wrap">
        <select
          value={priority}
          onChange={e => onPriorityChange(e.target.value as 'high' | 'medium' | 'low')} // as any を除去
          className="px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-600 text-sm"
        >
          <option value="high">🔴 高優先度</option>
          <option value="medium">🟡 中優先度</option>
          <option value="low">🟢 低優先度</option>
        </select>
        <input
          type="date"
          value={dueDate}
          onChange={e => onDueDateChange(e.target.value)}
          className="px-3 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-600 text-sm"
        />
      </div>
    </div>
  );
}
