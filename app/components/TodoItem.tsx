'use client';

import React, { useState } from 'react';
import TodoItem, { Todo } from '@/app/components/TodoItem'; // Sesuaikan path import

export default function TodoList() {
  // 1. Definisikan state untuk daftar tugas
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'Belajar Next.js', completed: false },
    { id: 2, title: 'Mengerjakan tugas kuliah', completed: true },
  ]);

  // 2. Buat fungsi untuk menangani toggle (checklist)
  const handleToggle = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 3. (Opsional) Buat fungsi untuk menangani hapus karena TodoItem menerima onDelete
  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Daftar Tugas</h1>
      
      <ul className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle} // 👉 KUNCI PERBAIKAN: Kirimkan fungsi di sini
            onDelete={handleDelete} // (Opsional) Kirimkan fungsi hapus
          />
        ))}
      </ul>
      
      {todos.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Tidak ada tugas saat ini.</p>
      )}
    </div>
  );
}