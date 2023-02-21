import React, { useState } from 'react';
import './Post.css';

function Post() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const handleNewPostChange = (event) => {
    setNewPost(event.target.value);
  };

  const handleNewPostSubmit = (event) => {
    event.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost('');
  };

  const handlePostDelete = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  return (
    <div className="App">
      <h1>Postes</h1>
      <form onSubmit={handleNewPostSubmit}>
        <input
          type="text"
          placeholder="Ajouter un nouveau poste"
          value={newPost}
          onChange={handleNewPostChange}
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post}
            <button onClick={() => handlePostDelete(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// eslint-disable-next-line no-undef
export default Post;
