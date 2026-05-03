'use client';

import { useTodos, SortBy } from '../hooks/useTodos';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

export default function TodoApp() {
  const {
    todos,
    filtered,
    active,
    done,
    input,
    setInput,
    filter,
    setFilter,
    search,
    setSearch,
    sortBy,
    setSortBy,
    priority,
    setPriority,
    dueDate,
    setDueDate,
    editingId,
    setEditingId,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
    clearCompleted,
  } = useTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* ヘッダー */}
      <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 text-white py-8">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">✅ ToDoアプリ</h1>
          <p className="text-indigo-100">タスクを管理して、毎日を効率よく</p>
          <div className="flex gap-4 mt-4 justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold">{todos.length}</div>
              <div className="text-sm opacity-90">合計</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{active}</div>
              <div className="text-sm opacity-90">残り</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{done}</div>
              <div className="text-sm opacity-90">完了</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-8">
        {/* 入力フォーム */}
        <TodoForm
          input={input}
          priority={priority}
          dueDate={dueDate}
          onInputChange={setInput}
          onPriorityChange={setPriority}
          onDueDateChange={setDueDate}
          onAdd={addTodo}
        />

        {/* フィルターバー */}
        <div className="bg-white rounded-lg shadow p-4 mb-6 flex gap-4 flex-wrap items-center">
          <div className="flex gap-2">
            {(['all', 'active', 'completed'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  filter === f
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {f === 'all' ? 'すべて' : f === 'active' ? '未完了' : '完了済'}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="検索..."
            className="flex-1 px-4 py-2 border-2 border-slate-300 rounded-lg focus:border-indigo-600 text-sm"
          />
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as SortBy)} // as any を除去
            className="px-3 py-2 border-2 border-slate-300 rounded-lg text-sm"
          >
            <option value="created">作成日順</option>
            <option value="priority">優先度順</option>
            <option value="due">期限順</option>
          </select>
        </div>

        {/* Todoリスト */}
        <div className="space-y-2 mb-6">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-500">
              <div className="text-4xl mb-2">
                {search ? '🔍' : filter === 'completed' ? '📭' : '📝'}
              </div>
              <p>
                {search
                  ? '一致するタスクが見つかりません'
                  : filter === 'completed'
                  ? '完了済みのタスクはありません'
                  : filter === 'active'
                  ? 'すべてのタスクが完了しています！'
                  : 'タスクを追加して始めましょう'}
              </p>
            </div>
          ) : (
            filtered.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                isEditing={editingId === todo.id}
                onToggle={() => toggleTodo(todo.id)}
                onDelete={() => deleteTodo(todo.id)}
                onUpdate={text => updateTodo(todo.id, text)}
                onEditStart={() => setEditingId(todo.id)}
                onEditEnd={() => setEditingId(null)}
              />
            ))
          )}
        </div>

        {/* フッター */}
        {todos.length > 0 && (
          <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center">
            <span className="text-slate-600">
              {active ? `残り ${active} 件` : 'すべて完了！ 🎉'}
            </span>
            {done > 0 && (
              <button
                onClick={clearCompleted}
                className="px-4 py-2 border-2 border-red-500 text-red-600 rounded-lg hover:bg-red-50 font-semibold transition"
              >
                完了済みをすべて削除
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
