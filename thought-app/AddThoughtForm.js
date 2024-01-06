import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm({ addThought }) {
  const [text, setText] = useState('');

  const handleTextChange = event => {
    setText(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault(); // Prevents default browser behaviour upon form submission
    const newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime()
    }
    if(text.length > 0) {
      addThought(newThought);
    }
    setText('');
  }

  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
