import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CreatePost from './CreatePost';
import BlogPostPreview from './BlogPostPreview';
import TagFilter from './TagFilter';
import './Blog.css';

const initialPosts = [];

function Blog() {
  const [posts, setPosts] = useState(initialPosts);
  const [showCreate, setShowCreate] = useState(false);
  const [editPost, setEditPost] = useState(null);
  const [selectedTag, setSelectedTag] = useState('');

  // Fetch blog posts from public/blogPosts.json on mount
  useEffect(() => {
    fetch('/blogPosts.json')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.error('Failed to load blog posts:', err));
  }, []);

  // Extract unique tags from posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])));

  // Filter posts by selected tag
  const filteredPosts = selectedTag ? posts.filter(post => post.tags && post.tags.includes(selectedTag)) : posts;

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
        <h2 className="text-2xl font-bold text-center my-4">Blog & Posts</h2>
        <TagFilter tags={allTags} currentTag={selectedTag} onTagSelect={setSelectedTag} />
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
          {filteredPosts.length === 0 && <p style={{ textAlign: 'center', color: '#888', fontSize: '1.1rem', marginTop: 40 }}>No posts yet. Be the first to post!</p>}
          {filteredPosts.map(post => (
            <BlogPostPreview key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blog; 