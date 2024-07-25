"use client"
import { useState } from 'react';
import axios from 'axios';

export default function AddLink() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!url || !title || !description) {
      setError('All fields are required');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      await axios.post(
        '/api/links',
        { url, title, description },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setError('');
      setUrl('');
      setTitle('');
      setDescription('');
    } catch (err) {
      setError('Failed to create link');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="url">URL:</label>
        <input
          type="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Add Link</button>
    </form>
  );
}
