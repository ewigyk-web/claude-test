'use client';

import { useState, useEffect, useMemo } from 'react';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  dueDate: string | null;
  createdAt: string;
}

export type Filter = 'all' | 'active' | 'completed';
export type SortBy = 'created' | 'priority' | 'due';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState<SortBy>('created');
  const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
  const [dueDate, setDueDate] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);

  // ローカルストレージからの読み込み
  useEffect(() => {
    const saved = localStorage.getItem('todos_nextjs');
    if (saved) {
      try {
        setTodos(JSON.parse(saved));
      } catch {}
    }
  }, []);

  // ローカルストレージへの書き込み
  useEffect(() => {
    localStorage.setItem('todos_nextjs', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const text = input.trim();
    if (!text) return;

    const todo: Todo = {
      id: crypto.randomUUID(), // Date.now() より安全なID生成
      text,
      completed: false,
      priority,
      dueDate: dueDate || null,
      createdAt: new Date().toISOString(),
    };

    setTodos(prev => [todo, ...prev]);
    setInput('');
    setDueDate('');
    setPriority('medium');
  };

  const toggleTodo = (id: string) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const updateTodo = (id: string, text: string) => {
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, text } : t)));
  };

  const clearCompleted = () => {
    setTodos(prev => prev.filter(t => !t.completed));
  };

  // useMemo でフィルタ・ソートをキャッシュ（毎レンダーの再計算を防ぐ）
  const filtered = useMemo(() => {
    let result = [...todos];

    if (filter === 'active') result = result.filter(t => !t.completed);
    if (filter === 'completed') result = result.filter(t => t.completed);

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(t => t.text.toLowerCase().includes(q));
    }

    if (sortBy === 'priority') {
      const rank: Record<string, number> = { high: 0, medium: 1, low: 2 };
      result.sort((a, b) => rank[a.priority] - rank[b.priority]);
    } else if (sortBy === 'due') {
      result.sort((a, b) => {
        if (!a.dueDate && !b.dueDate) return 0;
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return a.dueDate.localeCompare(b.dueDate);
      });
    }

    return result;
  }, [todos, filter, search, sortBy]);

  const active = useMemo(() => todos.filter(t => !t.completed).length, [todos]);
  const done = useMemo(() => todos.filter(t => t.completed).length, [todos]);

  return {
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
  };
}
