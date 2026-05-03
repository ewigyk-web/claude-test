'use client';

import { Todo } from '../hooks/useTodos';
import { formatDueDate, formatCreated } from '../utils/formatDate';

const priorityLabels: Record<Todo['priority'], string> = {
  high: '高',
  medium: '中',
  low: '低',
};

const priorityColors: Record<Todo['priority'], string> = {
  high: 'bg-red-100 text-red-700',
  medium: 'bg-amber-100 text-amber-700',
  low: 'bg-green-100 text-green-700',
};

const borderColors: Record<Todo['priority'], string> = {
  high: 'border-red-500',
  medium: 'border-amber-500',
  low: 'border-green-500',
};

interface Props {
  todo: Todo;
  isEditing: boolean;
  onToggle: () => void;
  onDelete: () => void;
  onUpdate: (text: string) => void;
  onEditStart: () => void;
  onEditEnd: () => void;
}

export default function TodoItem({
  todo,
  isEditing,
  onToggle,
  onDelete,
  onUpdate,
  onEditStart,
  onEditEnd,
}: Props) {
  const due = formatDueDate(todo.dueDate); // 二重呼び出しを修正：一度だけ計算

  return (
    <div
      className={`bg-white rounded-lg shadow p-4 flex gap-4 items-start border-l-4 ${borderColors[todo.priority]} ${todo.completed ? 'opacity-60' : ''}`}
    >
      {/* 完了トグルボタン（aria-label でアクセシビリティ対応） */}
      <button
        onClick={onToggle}
        aria-label={todo.completed ? `${todo.text}を未完了にする` : `${todo.text}を完了にする`}
        className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition ${
          todo.completed
            ? 'bg-indigo-600 border-indigo-600'
            : 'border-slate-300 hover:border-indigo-600'
        }`}
      >
        {todo.completed && <span className="text-white text-sm">✓</span>}
      </button>

      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            autoFocus
            type="text"
            defaultValue={todo.text}
            onBlur={e => {
              const value = e.currentTarget.value.trim();
              if (value) onUpdate(value); // 空の場合は更新せずキャンセル
              onEditEnd();
            }}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                const value = e.currentTarget.value.trim();
                if (value) onUpdate(value);
                onEditEnd();
              }
              if (e.key === 'Escape') onEditEnd(); // Escape で明示的キャンセル
            }}
            className="w-full px-2 py-1 border-2 border-indigo-600 rounded focus:outline-none"
          />
        ) : (
          <>
            <p
              onClick={onEditStart}
              className={`text-lg cursor-pointer hover:text-indigo-600 ${
                todo.completed ? 'line-through text-slate-500' : ''
              }`}
            >
              {todo.text}
            </p>
            <div className="flex gap-2 mt-2 flex-wrap text-sm">
              <span className={`px-2 py-1 rounded-full font-semibold ${priorityColors[todo.priority]}`}>
                {priorityLabels[todo.priority]}
              </span>
              {due && (
                <span className={`px-2 py-1 rounded ${due.color}`}>
                  📅 {due.text}
                </span>
              )}
              <span className="text-slate-500">{formatCreated(todo.createdAt)}</span>
            </div>
          </>
        )}
      </div>

      {/* 削除ボタン（aria-label でアクセシビリティ対応） */}
      <button
        onClick={onDelete}
        aria-label={`${todo.text}を削除`}
        className="flex-shrink-0 text-red-600 hover:text-red-700 font-bold text-lg"
      >
        ×
      </button>
    </div>
  );
}
