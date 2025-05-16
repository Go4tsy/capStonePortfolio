import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import CreatePost from './CreatePost';
import './Blog.css';

const initialPosts = [
  {
    id: 1,
    author: 'Sean Etienne',
    content: 'Welcome to my new blog! Feel free to comment and interact.',
    date: new Date().toLocaleString(),
  },
  {
    id: 2,
    author: 'Sean Etienne',
    content: 'This is a sample post. You can create, edit, or delete posts just like on Facebook!',
    date: new Date().toLocaleString(),
  },
];

function Blog() {
  const [posts, setPosts] = useState(initialPosts);
  const [showCreate, setShowCreate] = useState(false);
  const [editPost, setEditPost] = useState(null);

  const handleCreate = (newPost) => {
    if (editPost) {
      setPosts(posts.map(post => post.id === editPost.id ? { ...post, content: newPost.content, date: new Date().toLocaleString() } : post));
      setEditPost(null);
    } else {
      setPosts([newPost, ...posts]);
    }
    setShowCreate(false);
  };

  const handleEdit = (post) => {
    setEditPost(post);
    setShowCreate(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const handleClose = () => {
    setShowCreate(false);
    setEditPost(null);
  };

  return (
    <>
      <Helmet>
        <title>Blog | Sean Etienne Portfolio</title>
        <meta name="description" content="Read and interact with posts by Sean Etienne. Create, edit, or delete your own posts." />
      </Helmet>
      <div className="blog">
        <h2>Blog & Posts</h2>
        <button
          style={{
            background: 'linear-gradient(90deg, #4069fd 0%, #274B63 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            padding: '12px 32px',
            fontWeight: 700,
            fontSize: '1.1rem',
            cursor: 'pointer',
            boxShadow: '0 2px 8px #4069fd22',
            marginBottom: '2rem',
            marginTop: '1rem',
            transition: 'background 0.2s',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          onClick={() => { setShowCreate(true); setEditPost(null); }}
        >
          + Create Post
        </button>
        {showCreate && (
          <CreatePost
            onCreate={handleCreate}
            onClose={handleClose}
            initialContent={editPost ? editPost.content : ''}
            isEdit={!!editPost}
          />
        )}
        <div className="blog-list">
          {posts.length === 0 && <p style={{ textAlign: 'center', color: '#888', fontSize: '1.1rem', marginTop: 40 }}>No posts yet. Be the first to post!</p>}
          {posts.map(post => (
            <article key={post.id} className="blog-article">
              <div style={{ fontWeight: 700, color: '#4069fd', marginBottom: 2, fontSize: '1.1rem' }}>{post.author}</div>
              <div style={{ marginBottom: 6, whiteSpace: 'pre-line', fontSize: '1.1rem', color: '#222' }}>{post.content}</div>
              <time style={{ fontSize: '0.95rem', color: '#888', marginBottom: 2 }}>{post.date}</time>
              <div className="blog-actions">
                <button onClick={() => handleEdit(post)} className="blog-edit-btn" aria-label={`Edit post by ${post.author}`}>Edit</button>
                <button onClick={() => handleDelete(post.id)} className="blog-delete-btn" aria-label={`Delete post by ${post.author}`}>Delete</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog; 